import { lighten, darken, desaturate } from 'polished'
import * as componentLibrary from '../components'

// THEME PARAMETERS

// https://randoma11y.com/#/?_k=v2euhx
const primaryColor = 'hsl(44, 46%, 76%)'
const secondaryColor = 'hsl(307, 78%, 23%)'
const maxWidth = 500
const spacing = 0.8

// DERIVED PARAMETERS

const primaryColorLightened = lighten(0.14, primaryColor)
const primaryColorDesaturated = desaturate(0.32, primaryColor)
const secondaryColorDarkened = darken(0.07, secondaryColor)
const secondaryColorDarkenedLess = darken(0.05, secondaryColor)
const secondaryColorDesaturated = desaturate(0.62, secondaryColor)
const secondaryColorDesaturatedLess = desaturate(0.25, secondaryColor)


const Main = componentLibrary.Main.customize({
  bg: secondaryColor,
})

const ScrollableColumn = componentLibrary.Column.customize({
  childSpacing: spacing,
  bg: secondaryColor,
  innerMaxWidth: maxWidth,
  marginNonHighlighted: 1,
})

const BasicCard = componentLibrary.Card.customize({
  backgroundColor: primaryColorLightened,
  mainColor: secondaryColorDarkened,
  altColor: secondaryColorDesaturated,
  backgroundColor_highlighted: primaryColor,
  padding: spacing,
})

const BreakCard = BasicCard.customize({
  mainColor: primaryColorLightened,
  altColor: primaryColorDesaturated,
  background: componentLibrary.helpers.createHatchedBackground({
    bgColor: secondaryColorDarkened,
    hatchColor: secondaryColorDarkenedLess,
  }),
})

const Header = componentLibrary.Header.customize({
  bg: primaryColor,
  color: secondaryColorDarkened,
  innerMaxWidth: maxWidth,
  paddingVertical: spacing,
  paddingHorizontal: spacing * 1.6,
})

const SpanGroup = componentLibrary.SpanGroup.customize({
  childSpacing: spacing,
})

const FixedHeightBody = componentLibrary.Window

export {
  FixedHeightBody,
  Main,
  ScrollableColumn,
  BasicCard as AdminCard,
  BasicCard as TalkCard,
  BreakCard,
  Header,
  SpanGroup,
}
