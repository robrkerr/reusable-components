import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components-themes'
import { FixedHeightBody, Main, Gallery, Item, Header } from './components'
import items from './items'
import theme from './theme'

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
