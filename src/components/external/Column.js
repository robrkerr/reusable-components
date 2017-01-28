import React from 'react'
import styled from 'styled-components'
import { getShadowsForElevation } from '../internal/helpers'

export default (appliedTheme) => {

  const baseTheme = {
    childSpacing: 1,
    marginNonHighlighted: 1,
    bg: 'white',
    scrollable: true,
    innerMaxWidth: undefined,
    shadowColor: 'hsl(0, 0%, 10%)',
    itemElevation: 2,
    itemElevation_highlighted: 6,
    raiseChildrenOnHover: true,
  }

  const theme = { ...baseTheme, ...appliedTheme }

  const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: ${theme.bg};
    ${theme.scrollable ? "overflow-y: auto;" : "overflow-y: hidden;"}
  `
  Container.displayName = 'Column.Container'

  const Inner = styled.div`
    position: relative;
    width: 100%;
    ${theme.innerMaxWidth && `max-width: ${theme.innerMaxWidth}px;`}
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: ${theme.childSpacing}rem;

    & > *+* {
      margin-top: ${theme.childSpacing}rem;
    }
    & > *:last-child {
      margin-bottom: ${theme.childSpacing}rem;
    }
    & > * {
      box-shadow: ${getShadowsForElevation(theme.itemElevation)};
      transform: perspective(1px) scale(0.97);
    }
    & > *[data-status="highlighted"] {
      box-shadow: ${getShadowsForElevation(theme.itemElevation_highlighted)};
      transform: perspective(1px) scale(1.00) translateY(-3px);
    }
    ${theme.raiseChildrenOnHover && `& > *:hover {
      box-shadow: ${getShadowsForElevation(theme.itemElevation_highlighted)};
      transform: perspective(1px) scale(1.00) translateY(-3px);
    }`}
  `
  Inner.displayName = 'Column.Inner'

  const Column = (props) => (
    <Container>
      <Inner {...props}>{props.children}</Inner>
    </Container>
  )
  Column.displayName = 'Column'

  return Column
}
