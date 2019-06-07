import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const RootView = styled(View)`
  height: 240;
  margin-top: 48;
`

const CustomMapView = styled(MapView)`
  flex: 1;
`

export default class Map extends React.Component {
  render() {
    return (
      <RootView>
        <CustomMapView
          loadingEnabled={true}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </CustomMapView>
      </RootView>
    );
  }
}
