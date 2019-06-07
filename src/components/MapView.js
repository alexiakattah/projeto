import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { buscarDadosMapa } from './../data/Api' 

const RootView = styled(View)`
  height: 240;
  margin-top: 48;
`

const CustomMapView = styled(MapView)`
  flex: 1;
`

export default class Map extends React.Component {
  constructor (props) {
    super(props)
    this.state = { items: [], isLoading: false }
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    buscarDadosMapa()
      .then((items) => { 
        this.setState({ items: items, isLoading: false }) 
      })
      .catch((error) => { 
        this.setState({ items: [], isLoading: false }) 
      })
  }

  render() {
    const region = {latitude: -20.1411, longitude: -44.8916, latitudeDelta: 0.015, longitudeDelta: 0.0121}

    const markers = this.state.items.map(item => (
      <Marker
        key={item.id}
        coordinate={{ latitude: item.latitude, longitude: item.longitude }}
      />
    ))

    return (
      <RootView>
        <CustomMapView initialRegion={region} loadingEnabled={true} provider={PROVIDER_GOOGLE}>{markers}</CustomMapView>
      </RootView>
    );
  }
}

