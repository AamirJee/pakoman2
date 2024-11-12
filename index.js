/**
 * @format
 */
/**
 * @format
 */
import { AppRegistry, LogBox } from 'react-native';
import Main from './src/Main';
import {name as appName} from './app.json';


//Removing console.log
// console.log = () => {};
console.warn = () => {};
console.error = () => {};
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

AppRegistry.registerComponent(appName, () => Main);