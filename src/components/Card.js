import React, { Component } from 'react'
import styled from 'styled-components'
import Collapse from 'react-collapse'
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
  transform-origin: 50% top;
  transition-property: opacity, transform, background-color;
  transition-duration: 1s;

  & > *+* {
    margin-top: 0.5rem;
  }
  & > * {
    transition-property: color;
    transition-duration: 1s;
  }
`}`

const Title = styled.div`${({ theme, ...props }) => `
  width: 100%;
  font-size: 1.2em;
  color: ${getThemeValue(theme, 'mainColor', props.status)};
`}`

const Note = styled.div`${({ theme, ...props }) => `
  width: 100%;
  color: ${getThemeValue(theme, 'altColor', props.status)};
`}`

const Details = styled.div`${({ theme, ...props }) => `
  width: 100%;
  color: ${getThemeValue(theme, 'mainColor', props.status)};
  & > *+* {
    margin-top: 0.5rem;
  }
`}`

class Card extends Component {
  state = { open: false }

  constructor() {
    super()
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  toggleOpen() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { title, details, note, children } = this.props
    const { open } = this.state
    const collapseProps = {
      isOpened: true,
      springConfig: { stiffness: 500, damping: (open ? 22 : 40) },
      ...this.props,
    }
    return (
      <Container {...this.props} onClick={this.toggleOpen}>
        { note && <Note {...this.props}>{ note }</Note> }
        { title && <Title {...this.props}>{ title }</Title> }
        { details && <Note {...this.props}>{ details }</Note> }
        { children &&
          <Collapse {...collapseProps} style={{ margin: 0 }}>
            { open && <div style={{ paddingTop: '0.5rem' }}>{ children }</div> }
          </Collapse>
        }
      </Container>
    )
  }
}

Card.BaseTheme = baseTheme

export default Card
