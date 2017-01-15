import React, { Component } from 'react';
import styled from 'styled-components-themes';

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: ${props => props.theme.bg || 'white'};
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  z-index: 1;
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
  max-width: ${props => props.theme.maxWidth || 500}px;
  margin: 0 auto;
  padding: 1rem 2rem;
  font-size: 1.3em;
  color: ${props => props.theme.color};
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <Inner>{this.props.children}</Inner>
      </Container>
    );
  }
}

export default Header;
