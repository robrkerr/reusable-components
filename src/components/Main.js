import React, { Component } from 'react'
import styled from 'styled-components-themes'

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex: 1;
  background-color: ${props => props.theme.bg || 'white'};
`;

class Main extends Component {
  render() {
    return (
      <Container>{this.props.children}</Container>
    )
  }
}

export default Main
