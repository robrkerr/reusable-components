import React, { Component } from 'react'
import styled from 'styled-components-themes'

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  ${props => {
    const { theme } = props
    return (theme.hatched || theme.hatchAngle || theme.hatchWidth || theme.hatchColor) ? (
      `background: repeating-linear-gradient(
        ${theme.hatchAngle || '45'}deg,
        ${theme.hatchColor || 'grey'},
        ${theme.hatchColor || 'grey'} ${theme.hatchWidth || 10}px,
        ${theme.bg || 'white'} ${theme.hatchWidth || 10}px,
        ${theme.bg || 'white'} ${theme.hatchWidth*2 || 20}px
      );`
    ) : (
      `background-color: ${theme.bg || 'white'};`
    )
  }}

  & > *+* {
    margin-top: 0.5rem;
  }
`

const Title = styled.div`
  width: 100%;
  font-size: 1.2em;
  color: ${props => props.theme.main || 'palevioletred'};
`

const Details = styled.div`
  width: 100%;
  color: ${props => props.theme.alt || 'grey'};
`

class Card extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        {
          this.props.details ? (
            <Details>{this.props.details}</Details>
          ) : null
        }
      </Container>
    )
  }
}

export default Card
