import React, { Component } from 'react'
import {
  FixedHeightBody,
  Main,
  Gallery,
  Item,
  Header
} from './components'
import items from './items'

class App extends Component {

  render() {
    return (
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
    )
  }
}

export default App
