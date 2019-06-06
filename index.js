/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MapView, {
    Animated,
    MAP_TYPES,
    ProviderPropType,
    Makers,
  } from './node_modules/react-native-maps/lib/components/MapView.js';
  

export default MapView;
AppRegistry.registerComponent(appName, () => App);
