/**
 * @format
 */

import Root from './src/ReduxAPI/Root';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './src/ConfigHeaderBar/HomeScreen';
import Navigation from './src/ConfigHeaderBar/Navigation';
import DrawerNavigation from './src/Drawer/DrawerNavigation';
import Main from './src/Redux/Main';
// import PostListing from './src/PostListing';
import TabNavi from './src/TabNav/TabNavi';
import TabNavigation from './src/TabNav/TabNavigation';
import TopNavigation from './src/TopTab/TopNavigation';
import CovidHome from './src/covid/CovidHome';
import MainCovid from './src/covid/Redux/MainCovid';
import Card1 from './src/covid/CardCovid';

AppRegistry.registerComponent(appName, () => MainCovid);
