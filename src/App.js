import React from 'react';
import styled from 'styled-components/native'
import { Text, View } from 'react-native'

import Header from './components/Header'
import ProfissionalList from './components/ProfissionalList'
import Map from './components/Map'

const Container = styled(View)`
  background-color: white;
  flex: 1;
`

const Title = styled(Text)`
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
      <Container>
        <Title>Consultas</Title>
        <Header items={['Recebidos', 'Mapa']} onSelectTab={this.onSelectTab} />
        { this.state.selectedTab == 0 ? <ProfissionalList /> : null }
        { this.state.selectedTab == 1 ? <Map /> : null }
      </Container>
    );
  }
}
