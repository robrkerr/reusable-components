import React from 'react'
import ReactDOM from 'react-dom'
import Schedule from './schedule/App'
import Notes from './notes/App'
import Selector from './Selector'
import './index.css'

const getApp = () => {
  switch (window.location.pathname) {
    case '/schedule': {
      return <Schedule />
    }
    case '/notes': {
      return <Notes />
    }
    default: {
      return <Selector />
    }
  }
}

ReactDOM.render(
  getApp(),
  document.getElementById('root')
);
