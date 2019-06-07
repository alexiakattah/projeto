import React from 'react'
import styled from 'styled-components/native'
import { View, ActivityIndicator } from 'react-native'

const Container = styled(View)`
    height: 200;
    justify-content: center;
    align-items: center;
`

const Loading = ({ profissional }) => (
  <Container>
    <ActivityIndicator size='large' color='#00BDD5' />
  </Container>
)

export default Loading
