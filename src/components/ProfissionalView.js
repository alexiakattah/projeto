import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'

const RootView = styled(View)`
  background-color: #FFFFFF;
  border-radius: 8;
  margin: 12px;
  elevation: 3;
  overflow: hidden;
  flex-direction: row;
`

const InfoView = styled(View)`
  flex: 1;
  padding: 12px;
`

const Name = styled(Text)`
  color: #00BBD5;
  font-size: 16;
`

const LikesView = styled(View)`
  background-color: #00BCD5;
  padding: 12px;
  width: 140;
  justify-content: center;
  align-items: center;
`

const LikesText = styled(Text)`
  color: #ffffff;
`

const LikesCountText = styled(Text)`
  color: #ffffff;
  font-size: 32;
  margin-top: 8px;
  margin-bottom: 8px;
`

const ProfissionalView = ({ profissional }) => (
  <RootView>
    <InfoView>
      <Name>{ profissional.nome }</Name>
      <Name>{ profissional.endereco }</Name>
      <Name>{ profissional.telefone }</Name>
    </InfoView>

    <LikesView>
      <LikesText>Voce tem</LikesText>
      <LikesCountText>{ profissional.quantidadeCurtidas }</LikesCountText>
      <LikesText>Curtidas</LikesText>
    </LikesView>
  </RootView>
)

ProfissionalView.propTypes = {
  profissional: PropTypes.object.isRequired
}

export default ProfissionalView
