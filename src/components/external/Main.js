import styled from 'styled-components'

export default (appliedTheme) => {

  const baseTheme = {
    bg: 'white',
  }

  const theme = { ...baseTheme, ...appliedTheme }

  const Main = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex: 1;
    background-color: ${theme.bg};
  `
  Main.displayName = 'Main'

  return Main
}
