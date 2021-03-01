import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CountryDetails from './CountryDetails';
import TestWeather from './TestWeather';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" ." component={HomeScreen} />
        <Stack.Screen name="CountryDetails" component={CountryDetails} />
        <Stack.Screen name="captital weather" component={TestWeather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
