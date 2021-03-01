import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from './Store';
import Users from './Users';

// ...

const Stack = createStackNavigator();
class Root extends React.Component {
  // ...

  render() {
    return (
      <Provider store={store}>
        <Users />
      </Provider>
    );
  }
}
export default Root;
