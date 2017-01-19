import React, { Component } from 'react'
import styled from 'styled-components'

const baseTheme = {
  childSpacing: 1,
  bg: 'white',
  scrollable: true,
  innerMaxWidth: undefined,
  shadowColor: 'hsl(0, 0%, 10%)',
}

const Container = styled.div`${({ theme }) => `
  display: flex;
  width: 100%;
  flex: 1;
  background-color: ${theme.bg};
  ${theme.scrollable ? "overflow-y: auto;" : "overflow-y: hidden;"}
`}`

const Inner = styled.div`${({ theme }) => `
  position: relative;
  width: 100%;
  ${theme.innerMaxWidth && `max-width: ${theme.innerMaxWidth}px;`}
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: ${theme.childSpacing}rem;

  & > *+* {
    margin-top: ${theme.childSpacing}rem;
  }
  & > *:last-child {
    margin-bottom: ${theme.childSpacing}rem;
  }
  & > * {
    box-shadow: 2px 2px 2px 0px ${theme.shadowColor};
  }
`}`

class Column extends Component {
  render() {
    return (
      <Container>
        <Inner>{this.props.children}</Inner>
      </Container>
    )
  }
}

Column.BaseTheme = baseTheme

export default Column
