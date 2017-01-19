import Color from 'color-js'
import { applyTheme } from '../theme-helpers'
import * as componentLibrary from '../components'

const theme = {
  // https://randoma11y.com/#/?_k=v2euhx
  light: Color('hsl(140, 11%, 53%)'),
  dark: Color('hsl(222, 68%, 7%)'),
  maxWidth: 1000,
  spacing: 1.5,
}

const Main = applyTheme({
  bg: theme.light.toString(),
}, componentLibrary.Main)

const Gallery = applyTheme({
  childSpacing: theme.spacing,
  padding: theme.spacing,
  bg: theme.light.toString(),
  innerMaxWidth: theme.maxWidth,
}, componentLibrary.Gallery)

const Item = applyTheme({
  bgColor: theme.light.lightenByRatio(0.3).toString(),
  mainColor: theme.dark.lightenByRatio(0.8).toString(),
  altColor: theme.dark.desaturateByRatio(0.5).lightenByRatio(1).toString(),
  padding: theme.spacing,
}, componentLibrary.Card)

const Header = applyTheme({
  bg: theme.light.lightenByRatio(0.3).toString(),
  mainColor: theme.dark.lightenByRatio(0.8).toString(),
  innerMaxWidth: theme.maxWidth,
  paddingVertical: theme.spacing,
  paddingHorizontal: theme.spacing*1.2,
}, componentLibrary.Header)

const FixedHeightBody = applyTheme({}, componentLibrary.FixedHeightBody)

export { FixedHeightBody, Main, Gallery, Item, Header }
