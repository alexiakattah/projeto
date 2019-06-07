import React from 'react'
import styled from 'styled-components/native'
import { Text, ScrollView } from 'react-native'

import { buscarProfissionais } from './../data/Api' 
import Profissional from './Profissional'

const Container = styled(ScrollView)`
  flex: 1;
`

class ProfissionalList extends React.Component {
  constructor (props) {
    super(props)
    this.state = { items: [], isLoading: false }
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    buscarProfissionais()
      .then((items) => { 
        this.setState({ items: items, isLoading: false }) 
      })
      .catch((error) => { 
        this.setState({ items: [], isLoading: false }) 
      })
  }

  render() {
    const isLoading = this.state.isLoading
    const isEmpty = !this.state.isLoading && this.state.items.length == 0

    const items = this.state.items.map((item, index) => 
      <Profissional key={index} profissional={item} />
    )
  
    return (
      <Container contentContainerStyle={{ paddingTop: 24 }}>
        { isLoading ? <Text key={"loading"}>Carregando...</Text> : null }
        { isEmpty ? <Text key={"empty-view"}>Lista Vazia!</Text> : null }
        { items }
      </Container>
    )
  }
}

export default ProfissionalList
