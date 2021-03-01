// import 'react-native-gesture-handler';
// import 'react-native-gesture-handler';
// import React from 'react';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import {StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import store from './../Redux/store';
// import CovidHome from '../CovidHome';

// // ...

// const Stack = createStackNavigator();
// class MainCovid extends React.Component {
//   // ...

//   render() {
//     return (
//       <Provider store={store}>
//         <CovidHome />
//       </Provider>
//     );
//   }
// }
// export default MainCovid;

import thunk from 'redux-thunk';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import CovidCountReducer from './reducer/CovidCountReducer';
import CovidHome from '../CovidHome';
import CardCovid from '../CardCovid';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const rootReducer = combineReducers({
  counts: CovidCountReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

class MainCovid extends React.Component {
  // ...

  render() {
    return (
      <Provider store={store}>
        <CardCovid />
      </Provider>
    );
  }
}
export default MainCovid;
