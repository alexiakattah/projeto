import React from 'react';
import styled from 'styled-components/native'
import Map from './components/Map'
import { Text, View } from 'react-native';

const RootView = styled(View)`
  background-color: white;
  flex: 1;
`

export default class App extends React.Component {
  render() {
    return (
      <RootView>
        <Text>Header</Text>
        <Map />
      </RootView>
    );
  }
}
