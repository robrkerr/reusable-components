import React, { Component } from 'react'
import styled from 'styled-components'

const baseTheme = {
  padding: 1,
  bgColor: 'white',
  background: undefined,
  mainColor: 'palevioletred',
  altColor: 'blue',
}

const Container = styled.div`${({ theme }) => `
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  padding: ${theme.padding}rem;
  ${theme.background ? `background: ${theme.background};` : `background-color: ${theme.bgColor};`}

  & > *+* {
    margin-top: 0.5rem;
  }
`}`

const Title = styled.div`${({ theme }) => `
  width: 100%;
  font-size: 1.2em;
  color: ${theme.mainColor};
`}`

const Details = styled.div`${({ theme }) => `
  width: 100%;
  color: ${theme.altColor};
`}`

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

Card.BaseTheme = baseTheme

export default Card
