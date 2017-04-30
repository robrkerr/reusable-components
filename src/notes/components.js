import { lighten, darken, desaturate } from 'polished'
import * as componentLibrary from '../components'

// THEME PARAMETERS

// https://randoma11y.com/#/?_k=v2euhx
const primaryColor = 'hsl(140, 11%, 53%)'
const secondaryColor = 'hsl(222, 68%, 13%)'
const maxWidth = 1000
const spacing = 1.5

// DERIVED PARAMETERS

const primaryColorLightened = lighten(0.14, primaryColor)
const secondaryColorDesaturated = desaturate(0.62, secondaryColor)

// MY COMPONENTS

const Main = componentLibrary.Main.customize({
  bg: primaryColor,
})

const Gallery = componentLibrary.Gallery.customize({
  childSpacing: spacing,
  padding: spacing,
  bg: primaryColor,
  innerMaxWidth: maxWidth,
})

const Item = componentLibrary.Card.customize({
  backgroundColor: primaryColorLightened,
  mainColor: secondaryColor,
  altColor: secondaryColorDesaturated,
  padding: spacing,
})

const Header = componentLibrary.Header.customize({
  bg: primaryColorLightened,
  mainColor: secondaryColor,
  innerMaxWidth: maxWidth,
  paddingVertical: spacing,
  paddingHorizontal: spacing * 2,
})

const FixedHeightBody = componentLibrary.Window

export {
  FixedHeightBody,
  Main,
  Gallery,
  Item,
  Header,
}
