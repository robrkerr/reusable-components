import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: ${props => props.theme.bg || 'white'};
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  z-index: 1;
`

const Inner = styled.div`
  display: flex;
  width: 100%;
  ${props => props.theme.innerMaxWidth ? (
  `max-width: ${props.theme.innerMaxWidth}px;`
  ) : ''}
  margin: 0 auto;
  padding: ${props => props.theme.paddingVertical || 1}rem ${props => 1.6*(props.theme.paddingHorizontal || 1)}rem;
  font-size: 1.3em;
  color: ${props => props.theme.color};
`

class Header extends Component {
  render() {
    return (
      <Container>
        <Inner>{this.props.children}</Inner>
      </Container>
    )
  }
}

export default Header
