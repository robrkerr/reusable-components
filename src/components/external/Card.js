import React, { Component } from 'react'
import styled from 'styled-components'
import Collapse from 'react-collapse'
import { getThemeFromStatus } from '../internal/helpers'
import createArrow from '../internal/Arrow'

const createComponent = (appliedTheme = {}) => {

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
    transition-property: opacity, transform, background-color, box-shadow;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    ${(props) => (props.collapseable ? 'cursor: pointer;' : '')}

    & > *+* {
      margin-top: 0.5rem;
    }
    & * {
      transition-property: color 1s;
    }
    & *[data-arrow="true"] {
      position: absolute;
      right: 0.8rem;
      top: 0.6rem;
    }
    & *[data-title="true"] {
      width: 100%;
      font-size: 1.2em;
      color: ${(props) => getThemeFromStatus(theme, 'mainColor', props.status)};
    }
    & *[data-note="true"] {
      width: 100%;
      color: ${(props) => getThemeFromStatus(theme, 'altColor', props.status)};
    }
    & *[data-collapseable="true"] {
      width: 100%;
      color: ${(props) => getThemeFromStatus(theme, 'mainColor', props.status)};
      transition: opacity 0.3s;
      opacity: ${(props) => props.open ? '1' : '0'};
    }
    & *+*[data-collapser="true"] {
      margin-top: 0;
    }
    & *+*[data-collapser="true"] > * {
      padding-top: 0.5rem;
    }
    & *[data-collapser="true"]+* {
      margin-top: 0;
    }
    & *[data-collapser="true"]:first-child > * {
      padding-bottom: 0.5rem;
    }
  `
  Container.displayName = 'Card.Container'

  return class Card extends Component {
    state = { open: false }

    constructor() {
      super()
      this.toggleOpen = this.toggleOpen.bind(this)
    }

    static customize(newAppliedTheme) {
      return createComponent({ ...appliedTheme, ...newAppliedTheme })
    }

    toggleOpen() {
      this.setState({ open: !this.state.open })
    }

    render() {
      const { children } = this.props
      const { open } = this.state
      const collapseable = children.filter(c => c.props['data-collapseable']).length > 0
      const collapseProps = {
        isOpened: open,
        keepCollapsedContent: true,
        springConfig: { stiffness: 400, damping: (open ? 22 : 40) },
      }
      const containerProps = {
        ...this.props,
        open: open,
        collapseable,
      }
      return (
        <Container {...containerProps} onClick={this.toggleOpen}>
          {
            children.map((child, i) => (
              child.props['data-collapseable'] ? (
                <Collapse key={i} data-collapser {...collapseProps}>
                  <div>{ child }</div>
                </Collapse>
              ) : child
            ))
          }
          { collapseable && <Arrow data-arrow flipped={open} /> }
        </Container>
      )
    }
  }
}

export default createComponent()
