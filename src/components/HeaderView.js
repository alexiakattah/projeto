import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import HeaderButton from './HeaderButton'
import { Image, View, Button } from 'react-native'

const RootView = styled(View)`
  height: 140;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`

const BackgroundView = styled(Image)`
  position: absolute;
  top: 0;
`

class HeaderView extends React.Component {
  constructor (props) {
    super(props)
    this.state = { activePosition: 0 }
  }

  onPress(index) {
    this.setState({ activePosition: index })
    this.props.onSelectTab(index)
  }

  render() {
    const buttons = this.props.items.map((item, index) => 
      <HeaderButton 
        key={index} 
        text={item} 
        selected={index == this.state.activePosition} 
        onPress={() => this.onPress(index)} 
      />
    )
  
    return (
      <RootView>
        <BackgroundView source={require('./../assets/header.png')} resizeMode='repeat' />
        {buttons}
      </RootView>
    )
  }
}

HeaderView.propTypes = {
  items: PropTypes.array.isRequired,
  onSelectTab: PropTypes.func.isRequired
}

export default HeaderView
