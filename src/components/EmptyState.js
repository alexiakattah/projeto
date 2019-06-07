import React from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'

const Container = styled(View)`
    height: 200;
    justify-content: center;
    align-items: center;
`

const Title = styled(Text)`
    font-size: 18;
`

const Loading = ({ profissional }) => (
  <Container>
    <Text>Sem registros</Text>
  </Container>
)

export default Loading
