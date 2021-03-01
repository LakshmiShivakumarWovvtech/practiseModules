import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import TabHomeScreen from './TabHomeScreen';
import Notification from './Notification';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={TabHomeScreen}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <HomeStack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
