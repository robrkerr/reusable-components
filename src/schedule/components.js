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
const secondaryColorDarkened = darken(0.07, secondaryColor)
const secondaryColorDarkenedLess = darken(0.05, secondaryColor)
const secondaryColorDesaturated = desaturate(0.62, secondaryColor)
const secondaryColorDesaturatedLess = desaturate(0.25, secondaryColor)


const Main = componentLibrary.createMain({
  bg: secondaryColor,
})

const ScrollableColumn = componentLibrary.createColumn({
  childSpacing: spacing,
  bg: secondaryColor,
  innerMaxWidth: maxWidth,
  marginNonHighlighted: 1,
})

const TalkCard = componentLibrary.createCard({
  backgroundColor: primaryColorLightened,
  mainColor: secondaryColorDarkened,
  altColor: secondaryColorDesaturated,
  backgroundColor_highlighted: primaryColor,
  altColor_highlighted: secondaryColorDesaturatedLess,
  padding: spacing,
})

const AdminCard = componentLibrary.createCard({
  backgroundColor: primaryColorLightened,
  mainColor: secondaryColorDarkened,
  altColor: secondaryColorDesaturated,
  backgroundColor_highlighted: primaryColor,
  altColor_highlighted: secondaryColorDesaturatedLess,
  padding: spacing,
})

const BreakCard = componentLibrary.createCard({
  mainColor: primaryColorLightened,
  altColor: secondaryColorDesaturated,
  background: componentLibrary.helpers.createHatchedBackground({
    bgColor: secondaryColorDarkened,
    hatchColor: secondaryColorDarkenedLess,
  }),
  padding: spacing,
})

const Header = componentLibrary.createHeader({
  bg: primaryColor,
  color: secondaryColorDarkened,
  innerMaxWidth: maxWidth,
  paddingVertical: spacing,
  paddingHorizontal: spacing * 1.6,
})

const FixedHeightBody = componentLibrary.createWindow({})

const SpanGroup = componentLibrary.createSpanGroup({
  childSpacing: spacing,
})

export { FixedHeightBody, Main, ScrollableColumn, AdminCard, TalkCard, BreakCard, Header, SpanGroup }
