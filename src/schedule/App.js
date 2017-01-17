import React, { Component } from 'react'
import { FixedHeightBody, Main, ScrollableColumn, AdminItem, TalkItem, BreakItem, Header } from './components'
import schedule from './schedule'

const renderItem = (item, i) => {
  const props = {
    key: i,
    title: item.title,
    details: item.presenter,
    note: item.start,
  }
  switch (item.type) {
    case 'admin': {
      return <AdminItem {...props} />
    }
    case 'talk': {
      return <TalkItem {...props} />
    }
    case 'break': {
      return <BreakItem {...props} />
    }
    default: {
      return null
    }
  }
}

class App extends Component {

  render() {
    return (
      <FixedHeightBody>
        <Header>
          {'Decompress 2016'}
        </Header>
        <Main>
          <ScrollableColumn>
            { schedule.map(renderItem) }
          </ScrollableColumn>
        </Main>
      </FixedHeightBody>
    )
  }
}

export default App
