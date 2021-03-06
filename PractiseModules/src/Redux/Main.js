import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import friendsReducer from './FriendsReducer';
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreen';

// ...

const store = createStore(friendsReducer);
const Stack = createStackNavigator();
class Main extends React.Component {
  // ...

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Friends" component={FriendsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
export default Main;
