import Color from 'color-js'
import { applyTheme } from '../helpers'
import BaseFixedHeightBody from '../components/FixedHeightBody'
import BaseHeader from '../components/Header'
import BaseMain from '../components/Main'
import BaseGallery from '../components/Gallery'
import BaseCard from '../components/Card'

const theme = {
  // https://randoma11y.com/#/?_k=v2euhx
  light: Color('hsl(140, 11%, 53%)'),
  dark: Color('hsl(222, 68%, 7%)'),
  maxWidth: 1000,
  spacing: 1.5,
}

const Main = applyTheme(BaseMain, {
  bg: theme.light.toString(),
})

const Gallery = applyTheme(BaseGallery, {
  childSpacing: theme.spacing,
  padding: theme.spacing,
  bg: theme.light.toString(),
  innerMaxWidth: theme.maxWidth,
})

const Item = applyTheme(BaseCard, {
  bgColor: theme.light.lightenByRatio(0.3).toString(),
  mainColor: theme.dark.lightenByRatio(0.8).toString(),
  altColor: theme.dark.desaturateByRatio(0.5).lightenByRatio(1).toString(),
  padding: theme.spacing,
})

const Header = applyTheme(BaseHeader, {
  bg: theme.light.lightenByRatio(0.3).toString(),
  mainColor: theme.dark.lightenByRatio(0.8).toString(),
  innerMaxWidth: theme.maxWidth,
  paddingVertical: theme.spacing,
  paddingHorizontal: theme.spacing*1.2,
})

const FixedHeightBody = applyTheme(BaseFixedHeightBody, {
})

export { FixedHeightBody, Main, Gallery, Item, Header }
