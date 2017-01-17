import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  padding: ${props => props.theme.padding || 1}rem;
  ${props => {
    const { theme } = props
    return (theme.bgHatched || theme.bgHatchAngle || theme.bgHatchWidth || theme.bgHatchColor) ? (
      `background: repeating-linear-gradient(
        ${theme.bgHatchAngle || '45'}deg,
        ${theme.bgHatchColor || 'grey'},
        ${theme.bgHatchColor || 'grey'} ${theme.bgHatchWidth || 10}px,
        ${theme.bgColor || 'white'} ${theme.bgHatchWidth || 10}px,
        ${theme.bgColor || 'white'} ${theme.bgHatchWidth*2 || 20}px
      );`
    ) : (
      `background-color: ${theme.bgColor || 'white'};`
    )
  }}

  & > *+* {
    margin-top: 0.5rem;
  }
`

const Title = styled.div`
  width: 100%;
  font-size: 1.2em;
  color: ${props => props.theme.mainColor || 'palevioletred'};
`

const Details = styled.div`
  width: 100%;
  color: ${props => props.theme.altColor || 'grey'};
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
