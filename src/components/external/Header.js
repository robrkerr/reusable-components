import React, { Component } from 'react'
import styled from 'styled-components'

const createComponent = (appliedTheme = {}) => {

  const baseTheme = {
    childSpacing: 1,
    paddingVertical: 1,
    paddingHorizontal: 1.6,
    bg: 'white',
    innerMaxWidth: undefined,
    shadowColor: 'hsl(0, 0%, 10%)',
    color: 'black',
  }

  const theme = { ...baseTheme, ...appliedTheme }

  const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    background-color: ${theme.bg};
    z-index: 1;
  `
  Container.displayName = 'Header.Container'

  const Inner = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    ${theme.innerMaxWidth && `max-width: ${theme.innerMaxWidth}px;`}
    margin: 0 auto;
    padding: ${theme.paddingVertical}rem ${theme.paddingHorizontal}rem;
    color: ${theme.color};

    & *[data-title] {
      font-size: 1.3em;
    }
  `
  Inner.displayName = 'Header.Inner'

  return class Header extends Component {
    static customize(newAppliedTheme) {
      return createComponent({ ...appliedTheme, ...newAppliedTheme })
    }

    render() {
      return (
        <Container data-header {...this.props}>
          <Inner>{this.props.children}</Inner>
        </Container>
      )
    }
  }
}

export default createComponent()
