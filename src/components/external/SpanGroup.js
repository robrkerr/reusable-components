import styled from 'styled-components'

export default (appliedTheme) => {

  const baseTheme = {
    childSpacing: 1,
  }

  const theme = { ...baseTheme, ...appliedTheme }

  const SpanGroup = styled.span`
    display: flex;

    & > *+* {
      margin-left: ${theme.childSpacing}rem;
    }
  `
  SpanGroup.displayName = 'SpanGroup'

  return SpanGroup
}
