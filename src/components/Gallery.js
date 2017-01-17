import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.bg || 'white'};
  overflow-y: auto;
`

const Inner = styled.div`
  position: relative;
  width: 100%;
  ${({ theme }) => theme.innerMaxWidth && `max-width: ${theme.innerMaxWidth}px;`}
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${({ theme }) => (theme.childSpacing || 1) * 0.5}rem;
  align-content: flex-start;
  justify-content: center;

  & > * {
    box-shadow: 2px 2px 2px 0px ${({ theme }) => theme.shadowColor || 'hsl(0, 0%, 10%)'};
    width: 210px;
    height: 180px;
    margin: ${({ theme }) => (theme.childSpacing || 1) * 0.5}rem;
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
