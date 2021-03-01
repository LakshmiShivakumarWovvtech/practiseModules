import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './MyDrawer';

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};
export default DrawerNavigation;
