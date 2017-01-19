import React, { Component } from 'react'
import styled from 'styled-components'

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

class Selector extends Component {
  render() {
    return (
      <Container>
        <Link href={'/schedule'}>Decompress Schedule</Link>
        <Link href={'/notes'}>Notes</Link>
      </Container>
    )
  }
}

export default Selector
