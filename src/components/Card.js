import React, { Component } from 'react'
import styled from 'styled-components'
import Collapse from 'react-collapse'
import { getThemeFromStatus } from './helpers/internal'

export default (appliedTheme) => {

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

  const theme = { ...baseTheme, ...appliedTheme }

  const Container = styled.div`
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    padding: ${theme.padding}rem;
    ${(props) => (getThemeFromStatus(theme, 'background', props.status)
        ? `background: ${getThemeFromStatus(theme, 'background', props.status)};`
        : `background-color: ${getThemeFromStatus(theme, 'backgroundColor', props.status)};`
    )}
    opacity: ${(props) => getThemeFromStatus(theme, 'opacity', props.status)};
    transform-origin: 50% top;
    transition-property: opacity, transform, background-color;
    transition-duration: 1s;

    & > *+* {
      margin-top: 0.5rem;
    }
    & > * {
      transition-property: color 1s;
    }
  `

  const Title = styled.div`
    width: 100%;
    font-size: 1.2em;
    color: ${(props) => getThemeFromStatus(theme, 'mainColor', props.status)};
  `

  const Note = styled.div`
    width: 100%;
    color: ${(props) => getThemeFromStatus(theme, 'altColor', props.status)};
  `

  const Details = styled.div`
    width: 100%;
    color: ${(props) => getThemeFromStatus(theme, 'mainColor', props.status)};
    padding-top: 1rem;
    transition: opacity 0.3s;
    opacity: ${(props) => props.open ? '1' : '0'};
  `

  return class Card extends Component {
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
        isOpened: open,
        keepCollapsedContent: true,
        springConfig: { stiffness: 400, damping: (open ? 22 : 40) },
      }
      return (
        <Container {...this.props} onClick={this.toggleOpen}>
          { note && <Note {...this.props}>{ note }</Note> }
          { title && <Title {...this.props}>{ title }</Title> }
          { details && <Note {...this.props}>{ details }</Note> }
          { children &&
            <Collapse {...collapseProps} style={{ margin: 0 }}>
              <Details {...this.props} open={open}>{ children }</Details>
            </Collapse>
          }
        </Container>
      )
    }
  }
}
