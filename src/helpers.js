import React from 'react'
import { ThemeProvider } from 'styled-components'

export const applyTheme = (Component, theme) => (props) => (
  <ThemeProvider theme={theme}>
    <Component {...props}>{ props.children }</Component>
  </ThemeProvider>
)

export const createHatchedBackground = ({
  hatchAngle = 45,
  hatchColor = 'grey',
  bgColor = 'white',
  hatchWidth = 10,
}) => (
  `repeating-linear-gradient(
    ${hatchAngle}deg,
    ${hatchColor},
    ${hatchColor} ${hatchWidth}px,
    ${bgColor} ${hatchWidth}px,
    ${bgColor} ${hatchWidth*2}px
  )`
)
