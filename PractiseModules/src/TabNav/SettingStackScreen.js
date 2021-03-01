import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import TabHomeScreen from './TabHomeScreen';
import Notification from './Notification';
import SettingScrren from './SettingScreen';

const HomeStack = createStackNavigator();

const SettingStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={SettingScrren} />
      <HomeStack.Screen name="Notification" component={Notification} />
    </HomeStack.Navigator>
  );
};
export default SettingStackScreen;
