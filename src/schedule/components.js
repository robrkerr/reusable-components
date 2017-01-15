import { adaptTheme } from 'styled-components-themes'
import BaseFixedHeightBody from '../components/FixedHeightBody'
import BaseHeader from '../components/Header'
import BaseMain from '../components/Main'
import BaseColumn from '../components/Column'
import BaseCard from '../components/Card'

const Main = adaptTheme(theme => ({
  bg: theme.dark.toHSV(),
}), BaseMain)

const ScrollableColumn = adaptTheme(theme => ({
  childSpacing: theme.spacing,
  padding: theme.padding,
  bg: theme.dark.toHSV(),
  innerMaxWidth: theme.maxWidth,
}), BaseColumn)

const TalkItem = adaptTheme(theme => ({
  bgColor: theme.light.lightenByRatio(0.3).toHSV(),
  mainColor: theme.dark.darkenByRatio(0.3).toHSV(),
  altColor: theme.dark.desaturateByRatio(0.8).lightenByRatio(0.2).toHSV(),
}), BaseCard)

const AdminItem = adaptTheme(theme => ({
  bgColor: theme.light.lightenByRatio(0.3).toHSV(),
  mainColor: theme.dark.darkenByRatio(0.3).toHSV(),
  altColor: theme.dark.desaturateByRatio(0.8).lightenByRatio(0.2).toHSV(),
}), BaseCard)

const BreakItem = adaptTheme(theme => ({
  bgColor: theme.dark.darkenByRatio(0.3).toHSV(),
  mainColor: theme.light.lightenByRatio(0.3).toHSV(),
  altColor: theme.light.desaturateByRatio(0.8).toHSV(),
  bgHatchColor: theme.dark.darkenByRatio(0.2).toHSV(),
}), BaseCard)

const Header = adaptTheme(theme => ({
  bg: theme.light.lightenByRatio(0.3).toHSV(),
  color: theme.dark.darkenByRatio(0.3).toHSV(),
  innerMaxWidth: theme.maxWidth,
}), BaseHeader)

const FixedHeightBody = adaptTheme(theme => ({
}), BaseFixedHeightBody)

export { FixedHeightBody, Main, ScrollableColumn, AdminItem, TalkItem, BreakItem, Header }