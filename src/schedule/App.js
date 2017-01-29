import React, { Component } from 'react'
import {
  FixedHeightBody,
  Main,
  ScrollableColumn,
  AdminCard,
  TalkCard,
  BreakCard,
  Header,
  SpanGroup,
} from './components'
import schedule from './schedule'

const getTimeValue = (timeStr) => new Date(`Fri, 02 Dec 2016 ${timeStr}:00`)
const getTimeString = (timeVal) => timeVal.toTimeString().split(' ')[0]

const renderItem = (time, item, i) => {
  const finished = (time >= getTimeValue(item.finish))
  const current = !finished && (time >= getTimeValue(item.start))
  const status = (finished || current) && (finished ? 'suppressed' : 'highlighted')
  switch (item.type) {
    case 'admin': {
      return (
        <AdminCard key={i} data-status={status} status={status}>
          <div data-note>{ item.start }</div>
          <div data-title>{ item.title }</div>
        </AdminCard>
      )
    }
    case 'talk': {
      return (
        <TalkCard key={i} data-status={status} status={status}>
          <div data-note>{ item.start }</div>
          <div data-title>{ item.title }</div>
          <div data-note>{ item.presenter }</div>
          <div data-collapseable>{ item.description }</div>
        </TalkCard>
      )
    }
    case 'break': {
      return (
        <BreakCard key={i} data-status={status} status={status}>
          <div data-note>{ item.start }</div>
          <div data-title>{ item.title }</div>
        </BreakCard>
      )
    }
    default: {
      return null
    }
  }
}

class App extends Component {
  state = { time: getTimeValue('11:30') }

  constructor() {
    super()
    this.makeEarlier = this.makeEarlier.bind(this)
    this.makeLater = this.makeLater.bind(this)
  }

  makeEarlier() {
    const { time } = this.state
    const newTime = new Date(time.valueOf() - 1000*60*15)
    this.setState({ time: newTime })
  }

  makeLater() {
    const { time } = this.state
    const newTime = new Date(time.valueOf() + 1000*60*15)
    this.setState({ time: newTime })
  }

  render() {
    return (
      <FixedHeightBody>
        <Header>
          <span data-title>{'Decompress 2016'}</span>
          <SpanGroup>
            <a onClick={this.makeEarlier}>{'<'}</a>
            <span>{getTimeString(this.state.time)}</span>
            <a onClick={this.makeLater}>{'>'}</a>
          </SpanGroup>
        </Header>
        <Main>
          <ScrollableColumn>
            { schedule.map((item, i) => renderItem(this.state.time, item, i)) }
          </ScrollableColumn>
        </Main>
      </FixedHeightBody>
    )
  }
}

export default App
