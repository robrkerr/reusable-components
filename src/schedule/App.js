import React, { Component } from 'react'
import {
  FixedHeightBody,
  Main,
  ScrollableColumn,
  AdminCard,
  TalkCard,
  BreakCard,
  Header
} from './components'
import schedule from './schedule'

const getTimeValue = (timeStr) => new Date(`Fri, 02 Dec 2016 ${timeStr}:00`)
const getTimeString = (timeVal) => timeVal.toTimeString().split(' ')[0]

const renderItem = (time, item, i) => {
  const finished = (time >= getTimeValue(item.finish))
  const current = !finished && (time >= getTimeValue(item.start))
  const status = (finished || current) && (finished ? 'suppressed' : 'highlighted')
  const props = {
    key: i,
    title: item.title,
    details: item.presenter,
    note: item.start,
    status,
  }
  switch (item.type) {
    case 'admin': {
      return <AdminCard data-status={status} {...props} />
    }
    case 'talk': {
      return <TalkCard data-status={status} {...props} />
    }
    case 'break': {
      return <BreakCard data-status={status} {...props} />
    }
    default: {
      return null
    }
  }
}

class App extends Component {

  constructor() {
    super()
    this.makeEarlier = this.makeEarlier.bind(this)
    this.makeLater = this.makeLater.bind(this)
  }

  state = { time: getTimeValue('11:30') }

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
          <a onClick={this.makeEarlier}>{'<'}</a>
          <span>{getTimeString(this.state.time)}</span>
          <a onClick={this.makeLater}>{'>'}</a>
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
