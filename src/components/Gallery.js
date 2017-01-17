import React, { Component } from 'react'
import styled from 'styled-components'

const themeDefaults = {
  childSpacing: 1,
  bg: 'white',
  innerMaxWidth: undefined,
  shadowColor: 'hsl(0, 0%, 10%)',
}

const Container = styled.div`${(props) => {
  const theme = { ...themeDefaults, ...props.theme }
  return `
    display: flex;
    width: 100%;
    flex: 1;
    background-color: ${theme.bg};
    overflow-y: auto;
  `
}}`

const Inner = styled.div`${(props) => {
  const theme = { ...themeDefaults, ...props.theme }
  return `
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
}}`

class Gallery extends Component {
  render() {
    return (
      <Container>
        <Inner>{this.props.children}</Inner>
      </Container>
    )
  }
}

export default Gallery
