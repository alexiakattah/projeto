/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import {MapView} from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default () => (
  <View style={styles.container}>  

    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }} 
    >
    
    </MapView>
  </View>
);

//  export default class App extends React.Component {
//   render() {
//     return (
        
//       <MapView
//         style={styles.map}
//         loadingEnabled={true}
//         region={{
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.015,
//         longitudeDelta: 0.0121,
//         }}
//       >
//       </MapView>     
//     );
//   }
//}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {

    position: 'absolute',
    top: 70,
    left: 10,
    right: 10,
    bottom: 200,
  },
  header:{
    
  }
});
