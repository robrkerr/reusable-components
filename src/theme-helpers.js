import React from 'react'
import { ThemeProvider } from 'styled-components'

export const applyTheme = (appliedTheme, Component) => (props) => {
  const baseTheme = Component.BaseTheme || {}
  const theme = { ...baseTheme, ...appliedTheme }
  return (
    <ThemeProvider theme={theme}>
      <Component {...props}>{ props.children }</Component>
    </ThemeProvider>
  )
}
