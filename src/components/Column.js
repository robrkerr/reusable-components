import React, { Component } from 'react'
import styled from 'styled-components'

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
  ${props => props.theme.innerMaxWidth ? (
  `max-width: ${props.theme.innerMaxWidth}px;`
  ) : ''}
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.childSpacing || 1}rem;

  & > *+* {
    margin-top: ${props => props.theme.childSpacing || 1}rem;
  }
  & > *:last-child {
    margin-bottom: ${props => props.theme.childSpacing || 1}rem;
  }
  & > * {
    box-shadow: 2px 2px 2px 0px ${props => props.theme.shadowColor || 'hsl(0, 0%, 10%)'};
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
