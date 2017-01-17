import React from 'react'
import { ThemeProvider } from 'styled-components'

export const applyTheme = (Component, theme) => (props) => (
  <ThemeProvider theme={theme}>
    <Component {...props}>{ props.children }</Component>
  </ThemeProvider>
)
