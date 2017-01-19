import React from 'react'
import { ThemeProvider } from 'styled-components'

export const applyTheme = (appliedTheme, Component) => {
  const baseTheme = Component.BaseTheme || {}
  const theme = { ...baseTheme, ...appliedTheme }
  return props => (
    <ThemeProvider theme={theme}>
      <Component {...props}>{ props.children }</Component>
    </ThemeProvider>
  )
}

export const adaptTheme = (adapter, Component) => {
  const baseTheme = Component.BaseTheme || {}
  const applyAdaptation = theme => Object.assign(
    { __originalTheme: theme }, baseTheme, adapter(theme)
  )
  const restoreOriginal = adaptedTheme => adaptedTheme.__originalTheme
  return props => (
    <ThemeProvider theme={applyAdaptation}>
      <Component {...props}>
        { React.Children.map(props.children, child => React.isValidElement(child)
          ? <ThemeProvider theme={restoreOriginal}>{ child }</ThemeProvider>
          : child
        )}
      </Component>
    </ThemeProvider>
  )
}
