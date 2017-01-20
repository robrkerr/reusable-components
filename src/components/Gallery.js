import React, { Component } from 'react'
import styled from 'styled-components'

export default (appliedTheme) => {

  const baseTheme = {
    childSpacing: 1,
    bg: 'white',
    innerMaxWidth: undefined,
    shadowColor: 'hsl(0, 0%, 10%)',
  }

  const theme = { ...baseTheme, ...appliedTheme }

  const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: ${theme.bg};
    overflow-y: auto;
  `

  const Inner = styled.div`
    position: relative;
    width: 100%;
    ${theme.innerMaxWidth && `max-width: ${theme.innerMaxWidth}px;`}
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: ${theme.childSpacing * 0.5}rem;
    align-content: flex-start;
    justify-content: center;

    & > * {
      box-shadow: 2px 2px 2px 0px ${theme.shadowColor};
      width: 210px;
      height: 180px;
      margin: ${theme.childSpacing * 0.5}rem;
    }
  `

  return class Gallery extends Component {
    render() {
      return (
        <Container>
          <Inner>{this.props.children}</Inner>
        </Container>
      )
    }
  }
}
