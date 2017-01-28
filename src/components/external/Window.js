import styled from 'styled-components'
import { getShadowsForElevation } from '../internal/helpers'

export default (appliedTheme) => {

  const baseTheme = {
    headerElevation: 8,
    footerElevation: 8,
  }

  const theme = { ...baseTheme, ...appliedTheme }

  const Window = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    & *[data-header] {
      box-shadow: ${getShadowsForElevation(theme.headerElevation)};
      position: relative;
      z-index: 1;
    }
    & *[data-footer] {
      box-shadow: ${getShadowsForElevation(theme.footerElevation)};
      position: relative;
      z-index: 1;
    }
  `
  Window.displayName = 'Window'

  return Window
}
