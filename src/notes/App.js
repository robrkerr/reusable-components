import React, { Component } from 'react'
// import {Editor, ContentState} from 'draft-js'
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
          <span data-title>{'Notes'}</span>
        </Header>
        <Main>
          <Gallery>
            { items.map((item, i) => (
              <Item key={i}>
                <div data-title>{ item.title }</div>
                <div>{ item.details }</div>
              </Item>
            )) }
          </Gallery>
        </Main>
      </FixedHeightBody>
    )
  }
}

// <Editor editorState={this.props.state} onChange={handleUpdate} />

export default App
