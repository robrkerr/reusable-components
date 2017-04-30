import React, { Component } from 'react'
import styled from 'styled-components'

const createComponent = (appliedTheme = {}) => {

  const baseTheme = {
    bg: 'white',
  }

  const theme = { ...baseTheme, ...appliedTheme }

  const MainInner = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex: 1;
    background-color: ${theme.bg};
  `
  MainInner.displayName = 'Main.Inner'

  return class Main extends Component {
    static customize(newAppliedTheme) {
      return createComponent({ ...appliedTheme, ...newAppliedTheme })
    }

    render() {
      return (
        <MainInner {...this.props}>{this.props.children}</MainInner>
      )
    }
  }
}

export default createComponent()
