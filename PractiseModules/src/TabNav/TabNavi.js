// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';

// import HomeStackScreen from './HomeStackScreen';
// import SettingStackScreen from './SettingStackScreen';

// const Tab = createBottomTabNavigator();

// function TabNavi() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeStackScreen} />
//         <Tab.Screen name="Settings" component={SettingStackScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import Setting from './Screens/Setting';
// import Profile from './Screens/Profile';
// import FeedScreen from './Screens/FeedScreen';
// import SearchScreen from './Screens/SearchScreen';
// import Calls from './Screens/Calls';
// import Chats from './Screens/Chats';
// import Contacts from './Screens/Contacts';
// import FeedDetailScreen from './Screens/FeedDetailScreen';
// import SearchDetailScreen from './Screens/SearchDetailScreen';
// import ActionBarImage from './Components/ActionBarImage';

import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TabHomeScreen from './TabHomeScreen';
import SettingScrren from './SettingScreen';
import DrawerHomePage from '../Drawer/DrawerHomePage';
import DrawerSettingScreen from '../Drawer/DrawerSettingScreen';
import DrawerProfile from '../Drawer/DrawerProfile';
import Notification from './Notification';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Share"
        component={TabHomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <AntDesign name="sharealt" size={30} color="#900" />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScrren}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: () => <AntDesign name="setting" size={30} color="#900" />,
        }}
      />
      <Tab.Screen
        name="notification"
        component={Notification}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: () => (
            <AntDesign name="notification" size={30} color="#900" />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: () => (
            <MaterialIcons name="chat" size={30} color="#900" />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: () => (
            <AntDesign name="contacts" size={30} color="#900" />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarLabel: 'Calls',
          tabBarIcon: () => (
            <Feather name="phone-call" size={30} color="#900" />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Feather
              name="home"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={DrawerSettingScreen}
        options={{
          title: 'Setting',
          drawerIcon: ({focused, size}) => (
            <Feather
              name="settings"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={DrawerProfile}
        options={{
          title: 'Profile',
          drawerIcon: ({focused, size}) => (
            <AntDesign
              name="profile"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeActivity"
          component={DrawerRoutes}
          options={{
            title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#d8d8d8',
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            // headerLeft: () => <ActionBarImage />,
            // headerRight: () => <ActionBarImage />,
          }}
        />

        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
