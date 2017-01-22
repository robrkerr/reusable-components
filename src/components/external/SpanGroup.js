import React, { Component } from 'react'
import styled from 'styled-components'

export default (appliedTheme) => {

  const baseTheme = {
    childSpacing: 1,
  }

  const theme = { ...baseTheme, ...appliedTheme }

  const Container = styled.span`
    display: flex;

    & > *+* {
      margin-left: ${theme.childSpacing}rem;
    }
  `

  return class Column extends Component {
    render() {
      return (
        <Container>{this.props.children}</Container>
      )
    }
  }
}
