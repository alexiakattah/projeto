import React from 'react';
import styled from 'styled-components/native'
import HeaderView from './components/HeaderView'
import ProfissionalListView from './components/ProfissionalListView'
import MapView from './components/MapView'
import { Text, View } from 'react-native';

const RootView = styled(View)`
  background-color: white;
  flex: 1;
`

const TitleView = styled(Text)`
  height: 56;
  margin-left: 24;
  text-align-vertical: center;
  font-size: 18;
  color: #00BDD5;
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
        <TitleView>Consultas</TitleView>
        <HeaderView items={['Recebidos', 'Mapa']} onSelectTab={this.onSelectTab} />
        { this.state.selectedTab == 0 ? <ProfissionalListView /> : null }
        { this.state.selectedTab == 1 ? <MapView /> : null }
      </RootView>
    );
  }
}
