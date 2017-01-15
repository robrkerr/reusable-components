import React, { Component } from 'react'
import styled from 'styled-components-themes'

const Container = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  background-color: ${props => props.theme.bg || 'white'};
  ${props => (props.theme.scrollable === false) ? (
  "overflow-y: hidden;"
  ) : (
  "overflow-y: auto;"
  )}
`

const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: ${props => props.theme.maxWidth || 500}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.padding || '1rem'};

  & > *+* {
    margin-top: ${props => props.theme.childSpacing || '1rem'};
  }
  & > *:last-child {
    margin-bottom: ${props => props.theme.childSpacing || '1rem'};
  }
  & > * {
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.75);
  }
`

class Column extends Component {
  render() {
    return (
      <Container>
        <Inner>{this.props.children}</Inner>
      </Container>
    )
  }
}

export default Column
