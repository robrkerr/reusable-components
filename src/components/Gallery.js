import React, { Component } from 'react'
import styled from 'styled-components-themes'

const Container = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  background-color: ${props => props.theme.bg || 'white'};
  overflow-y: auto;
`

const Inner = styled.div`
  position: relative;
  width: 100%;
  ${props => props.theme.innerMaxWidth ? (
  `max-width: ${props.theme.innerMaxWidth}px;`
  ) : ''}
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${props => props.theme.childSpacing*0.5 || 0.5}rem;
  align-content: flex-start;
  justify-content: center;

  & > * {
    box-shadow: 2px 2px 2px 0px ${props => props.theme.shadowColor || 'hsl(0, 0%, 10%)'};
    width: 210px;
    height: 180px;
    margin: ${props => props.theme.childSpacing*0.5 || 0.5}rem;
  }
`

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
