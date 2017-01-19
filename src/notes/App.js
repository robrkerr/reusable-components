import React, { Component } from 'react'
import Color from 'color-js'
import { ThemeProvider } from 'styled-components'
import {
  FixedHeightBody,
  Main,
  Gallery,
  Item,
  Header
} from './components'
import items from './items'

const theme = {
  // https://randoma11y.com/#/?_k=v2euhx
  light: Color('hsl(140, 11%, 53%)'),
  dark: Color('hsl(222, 68%, 7%)'),
  maxWidth: 1000,
  spacing: 1.5,
}

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <FixedHeightBody>
          <Header>
            {'Notes'}
          </Header>
          <Main>
            <Gallery>
              { items.map((item, i) => (
                <Item key={i} title={item.title} details={item.details} />
              )) }
            </Gallery>
          </Main>
        </FixedHeightBody>
      </ThemeProvider>
    )
  }
}

export default App
