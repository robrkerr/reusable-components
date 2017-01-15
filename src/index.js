import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components-themes'
import Schedule from './schedule/App'
import Gallery from './gallery/App'
import './index.css'

const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  max-width: 400px;
  margin: 0 auto;

  & > *+* {
    margin-top: 0.5rem;
  }
`

const Link = styled.a`
  display: block;
  cursor: pointer;
`

class Index extends Component {
  render() {
    return (
      <Container>
        <Link href={'/schedule'}>Decompress Schedule</Link>
        <Link href={'/gallery'}>Random Gallery</Link>
      </Container>
    )
  }
}

const getApp = () => {
  switch (window.location.pathname) {
    case '/schedule': {
      return <Schedule />
    }
    case '/gallery': {
      return <Gallery />
    }
    default: {
      return <Index />
    }
  }
}

ReactDOM.render(
  getApp(),
  document.getElementById('root')
);
