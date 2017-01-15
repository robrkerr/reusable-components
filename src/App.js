import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components-themes'
import { FixedHeightBody, Main, ScrollableColumn, AdminItem, TalkItem, BreakItem, Header } from './components'
import schedule from './schedule'
import theme from './theme'

const renderItem = (item, i) => {
  switch (item.type) {
    case 'admin': {
      return (<AdminItem key={i} title={item.title} details={item.presenter} />)
    }
    case 'talk': {
      return (<TalkItem key={i} title={item.title} details={item.presenter} />)
    }
    case 'break': {
      return (<BreakItem key={i} title={item.title} details={item.presenter} />)
    }
    default: {
      return <div></div>
    }
  }
}

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <FixedHeightBody>
          <Header>
            Decompress
          </Header>
          <Main>
            <ScrollableColumn>
              { schedule.map(renderItem) }
            </ScrollableColumn>
          </Main>
        </FixedHeightBody>
      </ThemeProvider>
    )
  }
}

export default App
