import React from 'react'
import styled from 'styled-components'

export default (appliedTheme) => {

  const baseTheme = {
    rotation: 0,
    size: 1,
    thickness: 1.2,
    color: 'black',
  }

  const theme = { ...baseTheme, ...appliedTheme }

  const Button = styled.button`
    -webkit-appearance: none;
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0;
    cursor: pointer;
    transform-origin: 50% 50%;
    transform: rotate(${theme.rotation}deg) scaleX(${props => props.flipped ? '-1' : '1'});
    transition: all 200ms ease-in-out;
    overflow: visible;

    & polyline {
      fill: none;
      stroke: ${theme.color};
      stroke-width: ${theme.thickness};
      stroke-linecap: round;
      stroke-linejoin: round;
      vector-effect: non-scaling-stroke;
    }
    & svg {
      width: ${theme.size * 0.75}rem;
      height: ${theme.size}rem;
      backface-visibility: hidden;
    }
  `

  return (props) => (
    <Button {...props}>
      <svg viewBox="0 0 50 80">
        <polyline points="45,75 5,40 45,5"/>
      </svg>
    </Button>
  )
}
