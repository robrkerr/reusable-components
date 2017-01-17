import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.bg || 'white'};
  ${({ theme }) => (theme.scrollable === false) ? (
    "overflow-y: hidden;"
  ) : (
    "overflow-y: auto;"
  )}
`

const Inner = styled.div`
  position: relative;
  width: 100%;
  ${({ theme }) => theme.innerMaxWidth && `max-width: ${theme.innerMaxWidth}px;`}
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.childSpacing || 1}rem;

  & > *+* {
    margin-top: ${({ theme }) => theme.childSpacing || 1}rem;
  }
  & > *:last-child {
    margin-bottom: ${({ theme }) => theme.childSpacing || 1}rem;
  }
  & > * {
    box-shadow: 2px 2px 2px 0px ${({ theme }) => theme.shadowColor || 'hsl(0, 0%, 10%)'};
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
