import Color from 'color-js'
import { applyTheme } from '../theme-helpers'
import * as componentLibrary from '../components'

const theme = {
  // https://randoma11y.com/#/?_k=v2euhx
  light: Color('hsl(44, 46%, 69%)'),
  dark: Color('hsl(307, 78%, 23%)'),
  maxWidth: 500,
  spacing: 0.8,
}

const Main = applyTheme({
  bg: theme.dark.toString(),
}, componentLibrary.Main)

const ScrollableColumn = applyTheme({
  childSpacing: theme.spacing,
  bg: theme.dark.toString(),
  innerMaxWidth: theme.maxWidth,
}, componentLibrary.Column)

const TalkItem = applyTheme({
  bgColor: theme.light.lightenByRatio(0.3).toString(),
  mainColor: theme.dark.darkenByRatio(0.3).toString(),
  altColor: theme.dark.desaturateByRatio(0.8).toString(),
  padding: theme.spacing,
}, componentLibrary.Card)

const AdminItem = applyTheme({
  bgColor: theme.light.lightenByRatio(0.3).toString(),
  mainColor: theme.dark.darkenByRatio(0.3).toString(),
  altColor: theme.dark.desaturateByRatio(0.8).toString(),
  padding: theme.spacing,
}, componentLibrary.Card)

const BreakItem = applyTheme({
  mainColor: theme.light.lightenByRatio(0.3).toString(),
  altColor: theme.light.desaturateByRatio(0.8).toString(),
  background: componentLibrary.helpers.createHatchedBackground({
    bgColor: theme.dark.darkenByRatio(0.3).toString(),
    hatchColor: theme.dark.darkenByRatio(0.2).toString(),
  }),
  padding: theme.spacing,
}, componentLibrary.Card)

const Header = applyTheme({
  bg: theme.light.lightenByRatio(0.3).toString(),
  color: theme.dark.darkenByRatio(0.3).toString(),
  innerMaxWidth: theme.maxWidth,
  paddingVertical: theme.spacing,
  paddingHorizontal: theme.spacing*1.6,
}, componentLibrary.Header)

const FixedHeightBody = applyTheme({}, componentLibrary.FixedHeightBody)

export { FixedHeightBody, Main, ScrollableColumn, AdminItem, TalkItem, BreakItem, Header }
