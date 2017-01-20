import Color from 'color-js'
import * as componentLibrary from '../components'

const general = {
  // https://randoma11y.com/#/?_k=v2euhx
  light: Color('hsl(140, 11%, 53%)'),
  dark: Color('hsl(222, 68%, 7%)'),
  maxWidth: 1000,
  spacing: 1.5,
}

const Main = componentLibrary.createMain({
  bg: general.light.toString(),
})

const Gallery = componentLibrary.createGallery({
  childSpacing: general.spacing,
  padding: general.spacing,
  bg: general.light.toString(),
  innerMaxWidth: general.maxWidth,
})

const Item = componentLibrary.createCard({
  backgroundColor: general.light.lightenByRatio(0.3).toString(),
  mainColor: general.dark.lightenByRatio(0.8).toString(),
  altColor: general.dark.desaturateByRatio(0.5).lightenByRatio(1).toString(),
  padding: general.spacing,
})

const Header = componentLibrary.createHeader({
  bg: general.light.lightenByRatio(0.3).toString(),
  mainColor: general.dark.lightenByRatio(0.8).toString(),
  innerMaxWidth: general.maxWidth,
  paddingVertical: general.spacing,
  paddingHorizontal: general.spacing*2,
})

const FixedHeightBody = componentLibrary.createFixedHeightBody({})

export { FixedHeightBody, Main, Gallery, Item, Header }
