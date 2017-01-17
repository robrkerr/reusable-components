import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.bg || 'white'};
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  z-index: 1;
`

const Inner = styled.div`
  display: flex;
  width: 100%;
  ${({ theme }) => theme.innerMaxWidth && `max-width: ${theme.innerMaxWidth}px;`}
  margin: 0 auto;
  padding: ${({ theme }) => theme.paddingVertical || 1}rem ${({ theme }) => 1.6 * (theme.paddingHorizontal || 1)}rem;
  font-size: 1.3em;
  color: ${({ theme }) => theme.color};
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
