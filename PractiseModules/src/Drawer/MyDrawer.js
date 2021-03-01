import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import Feed from './Feed';
import DrawerNotification from './DrawerNotification';
import DrawerSettingScreen from './DrawerSettingScreen';
import DrawerHomePage from './DrawerHomePage';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={DrawerNotification} />
      <Drawer.Screen name="Settings" component={DrawerSettingScreen} />
      <Drawer.Screen name="Home" component={DrawerHomePage} />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
