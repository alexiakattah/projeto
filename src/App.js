import React from 'react';
import styled from 'styled-components/native'
import MapView from './components/MapView'
import HeaderView from './components/HeaderView'
import { Text, View } from 'react-native';

const RootView = styled(View)`
  background-color: white;
  flex: 1;
`

const ContentView = styled(View)`
  flex: 1;
`

const TitleView = styled(Text)`
  height: 56;
  margin-left: 24;
  text-align-vertical: center;
  font-size: 18;
  color: #00BDD5;
`

const BottomBarView = styled(View)`
  background-color: #f7f7f7;
  width: 100%;
  height: 64;
  position: absolute;
  bottom: 0;
  elevation: 2;
  z-index: 2;
`

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { selectedTab: 0 }

    this.onSelectTab = this.onSelectTab.bind(this)
  }

  onSelectTab(index) {
    this.setState({ selectedTab: index })
  }

  render() {
    return (
      <RootView>
        <ContentView>
          <TitleView>Consultas</TitleView>
          <HeaderView items={['Recibos', 'Mapa']} onSelectTab={this.onSelectTab} />
          { this.state.selectedTab == 0 ? <Text>Recibos</Text> : null }
          { this.state.selectedTab == 1 ? <MapView /> : null }
        </ContentView>
        <BottomBarView />
      </RootView>
    );
  }
}
