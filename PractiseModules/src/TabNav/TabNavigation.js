import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabHomeScreen from './TabHomeScreen';
import SettingScrren from './SettingScreen';
import Notification from './Notification';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={TabHomeScreen} />
        <Tab.Screen name="Settings" component={SettingScrren} />
        <Tab.Screen name="Notification" component={Notification} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
