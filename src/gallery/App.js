import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components-themes'
// import { FixedHeightBody, Main, ScrollableColumn, AdminItem, TalkItem, BreakItem, Header } from './components'
// import items from './items'
import theme from './theme'

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    )
  }
}

export default App
