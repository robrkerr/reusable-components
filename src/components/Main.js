import React, { Component } from 'react'
import styled from 'styled-components'

const baseTheme = {
  bg: 'white',
}

const Container = styled.div`${({ theme }) => `
  position: relative;
  display: flex;
  width: 100%;
  flex: 1;
  background-color: ${theme.bg};
`}`

class Main extends Component {
  render() {
    return (
      <Container>{this.props.children}</Container>
    )
  }
}

Main.BaseTheme = baseTheme

export default Main
