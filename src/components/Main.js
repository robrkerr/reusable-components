import React, { Component } from 'react'
import styled from 'styled-components'

export default (appliedTheme) => {

  const baseTheme = {
    bg: 'white',
  }

  const theme = { ...baseTheme, ...appliedTheme }

  const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex: 1;
    background-color: ${theme.bg};
  `

  return class Main extends Component {
    render() {
      return (
        <Container>{this.props.children}</Container>
      )
    }
  }

}
