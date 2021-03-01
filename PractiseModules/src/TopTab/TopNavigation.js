import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopHomeScreen from './TopHomeScreen';
import TopSettingScreen from './TopSettingScreen';
import TopNotificationScreen from './TopNotification';

const Tab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={TopHomeScreen} />
        <Tab.Screen name="Settings" component={TopSettingScreen} />
        <Tab.Screen name="Notification" component={TopNotificationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TopNavigation;
