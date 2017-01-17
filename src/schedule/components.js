import Color from 'color-js'
import { applyTheme, createHatchedBackground } from '../helpers'
import BaseFixedHeightBody from '../components/FixedHeightBody'
import BaseHeader from '../components/Header'
import BaseMain from '../components/Main'
import BaseColumn from '../components/Column'
import BaseCard from '../components/Card'

const theme = {
  // https://randoma11y.com/#/?_k=v2euhx
  light: Color('hsl(44, 46%, 69%)'),
  dark: Color('hsl(307, 78%, 23%)'),
  maxWidth: 500,
  spacing: 0.8,
}

const Main = applyTheme(BaseMain, {
  bg: theme.dark.toString(),
})

const ScrollableColumn = applyTheme(BaseColumn, {
  childSpacing: theme.spacing,
  bg: theme.dark.toString(),
  innerMaxWidth: theme.maxWidth,
})

const TalkItem = applyTheme(BaseCard, {
  bgColor: theme.light.lightenByRatio(0.3).toString(),
  mainColor: theme.dark.darkenByRatio(0.3).toString(),
  altColor: theme.dark.desaturateByRatio(0.8).toString(),
  padding: theme.spacing,
})

const AdminItem = applyTheme(BaseCard, {
  bgColor: theme.light.lightenByRatio(0.3).toString(),
  mainColor: theme.dark.darkenByRatio(0.3).toString(),
  altColor: theme.dark.desaturateByRatio(0.8).toString(),
  padding: theme.spacing,
})

const BreakItem = applyTheme(BaseCard, {
  mainColor: theme.light.lightenByRatio(0.3).toString(),
  altColor: theme.light.desaturateByRatio(0.8).toString(),
  background: createHatchedBackground({
    bgColor: theme.dark.darkenByRatio(0.3).toString(),
    hatchColor: theme.dark.darkenByRatio(0.2).toString(),
  }),
  padding: theme.spacing,
})

const Header = applyTheme(BaseHeader, {
  bg: theme.light.lightenByRatio(0.3).toString(),
  color: theme.dark.darkenByRatio(0.3).toString(),
  innerMaxWidth: theme.maxWidth,
  paddingVertical: theme.spacing,
  paddingHorizontal: theme.spacing*1.6,
})

const FixedHeightBody = applyTheme(BaseFixedHeightBody, {
})

export { FixedHeightBody, Main, ScrollableColumn, AdminItem, TalkItem, BreakItem, Header }
