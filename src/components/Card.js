import React, { Component } from 'react'
import styled from 'styled-components-themes'

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  background-color: ${props => props.theme.bg || 'white'};
`

const Title = styled.div`
  width: 100%;
  font-size: 1.2em;
  color: ${props => props.theme.main || 'palevioletred'};
`

const Details = styled.div`
  width: 100%;
`

class Card extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <Details>{this.props.details}</Details>
      </Container>
    )
  }
}

export default Card
