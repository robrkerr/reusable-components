import React, { Component } from 'react'
import styled from 'styled-components'
import Collapse from 'react-collapse'
import { getThemeFromStatus } from '../internal/helpers'
import createArrow from '../internal/Arrow'

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
    collapseable: false,
  }

  const theme = { ...baseTheme, ...appliedTheme }

  const Arrow = createArrow({ color: theme.mainColor, size: 1, rotation: 270 })

  const Container = styled.div`
    position: relative;
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
    ${(props) => (props.expandable ? 'cursor: pointer;' : '')}

    & > *+* {
      margin-top: 0.5rem;
    }
    & > * {
      transition-property: color 1s;
    }
    & > *[data-arrow="true"] {
      position: absolute;
      right: 1rem;
      top: 0.2rem;
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
        <Container expandable={children !== undefined} {...this.props} onClick={this.toggleOpen}>
          { note && <Note {...this.props}>{ note }</Note> }
          { title && <Title {...this.props}>{ title }</Title> }
          { details && <Note {...this.props}>{ details }</Note> }
          { children && theme.collapseable ? (
              <Collapse {...collapseProps} style={{ margin: 0 }}>
                <Details {...this.props} open={open}>{ children }</Details>
              </Collapse>
            ) : (
              <Details style={{ margin: 0 }} {...this.props} open>{ children }</Details>
            )
          }
          { theme.collapseable && children && <Arrow data-arrow flipped={open} /> }
        </Container>
      )
    }
  }
}
