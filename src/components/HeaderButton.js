import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { TouchableHighlight, Text } from 'react-native'

const RootView = styled(TouchableHighlight)`
  align-items: center;
  background-color: ${props => props.selected ? '#FFFFFF' : '#FFFFFF80'};
  border-top-left-radius: 12;
  border-top-right-radius: 12;
  height: 46;
  justify-content: center;
  margin-left: 8;
  margin-right: 8;
  width: 120;
`

const ButtonText = styled(Text)`
  color: #00BBD5;
  font-size: 16;
`

const HeaderButton = ({ text, selected, onPress }) => (
  <RootView selected={selected} onPress={onPress} underlayColor={selected ? '#FFFFFF80' : '#FFFFFF'}>
    <ButtonText>{ text }</ButtonText>
  </RootView>
)

HeaderButton.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onPress: PropTypes.func
}

HeaderButton.defaultProps = {
  selected: false
}

export default HeaderButton
