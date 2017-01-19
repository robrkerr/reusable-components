import React, { Component } from 'react'
import styled from 'styled-components'

const baseTheme = {
  childSpacing: 1,
  paddingVertical: 1,
  paddingHorizontal: 1.6,
  bg: 'white',
  innerMaxWidth: undefined,
  shadowColor: 'hsl(0, 0%, 10%)',
  color: 'black',
}

const Container = styled.div`${({ theme }) => `
  position: relative;
  display: flex;
  width: 100%;
  background-color: ${theme.bg};
  box-shadow: 0px 2px 5px 0px ${theme.shadowColor};
  z-index: 1;
`}`

const Inner = styled.div`${({ theme }) => `
  display: flex;
  width: 100%;
  ${theme.innerMaxWidth && `max-width: ${theme.innerMaxWidth}px;`}
  margin: 0 auto;
  padding: ${theme.paddingVertical}rem ${theme.paddingHorizontal}rem;
  font-size: 1.3em;
  color: ${theme.color};
`}`

class Header extends Component {
  render() {
    return (
      <Container>
        <Inner>{this.props.children}</Inner>
      </Container>
    )
  }
}

Header.BaseTheme = baseTheme

export default Header
