import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => theme.padding || 1}rem;
  ${({ theme }) => theme.background && `background: ${theme.background};`}
  ${({ theme }) => !theme.background && `background-color: ${theme.bgColor || 'white'};`}

  & > *+* {
    margin-top: 0.5rem;
  }
`

const Title = styled.div`
  width: 100%;
  font-size: 1.2em;
  color: ${({ theme }) => theme.mainColor || 'palevioletred'};
`

const Details = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.altColor || 'grey'};
`

class Card extends Component {
  render() {
    const { title, details, note } = this.props
    return (
      <Container>
        { note && <Details>{note}</Details> }
        { title && <Title>{title}</Title> }
        { details && <Details>{details}</Details> }
      </Container>
    )
  }
}

export default Card
