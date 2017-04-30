import React, { Component } from 'react'
import styled from 'styled-components'
import { getShadowsForElevation } from '../internal/helpers'

const createComponent = (appliedTheme = {}) => {

  const baseTheme = {
    headerElevation: 8,
    footerElevation: 8,
  }

  const theme = { ...baseTheme, ...appliedTheme }

  const WindowInner = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    & *[data-header] {
      box-shadow: ${getShadowsForElevation(theme.headerElevation)};
      position: relative;
      z-index: 1;
    }
    & *[data-footer] {
      box-shadow: ${getShadowsForElevation(theme.footerElevation)};
      position: relative;
      z-index: 1;
    }
  `
  WindowInner.displayName = 'Window.Inner'

  return class Window extends Component {
    static customize(newAppliedTheme) {
      return createComponent({ ...appliedTheme, ...newAppliedTheme })
    }

    render() {
      return (
        <WindowInner {...this.props}>{this.props.children}</WindowInner>
      )
    }
  }
}

export default createComponent()
