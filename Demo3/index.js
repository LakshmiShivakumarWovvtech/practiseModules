/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './src/HomeScreen';
import Navigation from './src/Navigation';

AppRegistry.registerComponent(appName, () => Navigation);
