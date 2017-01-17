import React, { Component } from 'react'
import styled from 'styled-components'

const themeDefaults = {
  bg: 'white',
}

const Container = styled.div`${(props) => {
  const theme = { ...themeDefaults, ...props.theme }
  return `
    position: relative;
    display: flex;
    width: 100%;
    flex: 1;
    background-color: ${theme.bg};
  `
}}`

class Main extends Component {
  render() {
    return (
      <Container>{this.props.children}</Container>
    )
  }
}

export default Main
