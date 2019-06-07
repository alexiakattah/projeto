import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { Image, View } from 'react-native'

import HeaderButton from './HeaderButton'

const Container = styled(View)`
  height: 140px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`

const Background = styled(Image)`
  position: absolute;
  top: 0;
`

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { activePosition: 0 }
  }

  onPress(index) {
    this.setState({ activePosition: index })
    this.props.onSelectTab(index)
  }

  render() {
    const tabs = this.props.items.map((item, index) => 
      <HeaderButton 
        key={index} 
        text={item} 
        selected={index == this.state.activePosition} 
        onPress={() => this.onPress(index)} 
      />
    )
  
    return (
      <Container>
        <Background source={require('./../assets/header.png')} resizeMode='repeat' />
        {tabs}
      </Container>
    )
  }
}

Header.propTypes = {
  items: PropTypes.array.isRequired,
  onSelectTab: PropTypes.func.isRequired
}

export default Header
