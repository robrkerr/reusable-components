import React, { Component } from 'react'
import styled from 'styled-components'

const createComponent = (appliedTheme = {}) => {

  const baseTheme = {
    childSpacing: 1,
  }

  const theme = { ...baseTheme, ...appliedTheme }

  const SpanGroupInner = styled.span`
    display: flex;

    & > *+* {
      margin-left: ${theme.childSpacing}rem;
    }
  `
  SpanGroupInner.displayName = 'SpanGroup.Inner'

  return class SpanGroup extends Component {
    static customize(newAppliedTheme) {
      return createComponent({ ...appliedTheme, ...newAppliedTheme })
    }

    render() {
      return (
        <SpanGroupInner {...this.props}>{this.props.children}</SpanGroupInner>
      )
    }
  }
}

export default createComponent()
