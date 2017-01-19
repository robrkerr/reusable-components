import React, { Component } from 'react'
import styled from 'styled-components'
import { getThemeValue } from './helpers/internal'

const baseTheme = {
  padding: 1,
  background: undefined,
  background_highlighted: undefined,
  background_suppressed: undefined,
  backgroundColor: 'lightblue',
  backgroundColor_highlighted: undefined,
  backgroundColor_suppressed: undefined,
  opacity: 1,
  opacity_highlighted: 1,
  opacity_suppressed: 0.6,
  mainColor: 'palevioletred',
  mainColor_highlighted: undefined,
  mainColor_suppressed: undefined,
  altColor: 'blue',
  altColor_highlighted: undefined,
  altColor_suppressed: undefined,
}

const Container = styled.div`${({ theme, ...props }) => `
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  padding: ${theme.padding}rem;
  ${(getThemeValue(theme, 'background', props.status)
      ? `background: ${getThemeValue(theme, 'background', props.status)};`
      : `background-color: ${getThemeValue(theme, 'backgroundColor', props.status)};`
  )}
  opacity: ${getThemeValue(theme, 'opacity', props.status)};
  transition: opacity 1s, transform 1s, background-color 1s;

  & > *+* {
    margin-top: 0.5rem;
  }
`}`

const Title = styled.div`${({ theme, ...props }) => `
  width: 100%;
  font-size: 1.2em;
  color: ${getThemeValue(theme, 'mainColor', props.status)};
`}`

const Details = styled.div`${({ theme, ...props }) => `
  width: 100%;
  color: ${getThemeValue(theme, 'altColor', props.status)};
`}`

class Card extends Component {
  render() {
    const { title, details, note, status } = this.props
    return (
      <Container {...this.props}>
        { note && <Details {...this.props}>{note}</Details> }
        { title && <Title {...this.props}>{title}</Title> }
        { details && <Details {...this.props}>{details}</Details> }
      </Container>
    )
  }
}

Card.BaseTheme = baseTheme

export default Card
