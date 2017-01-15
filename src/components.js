import { adaptTheme } from 'styled-components-themes'
import BaseFixedHeightBody from './components/FixedHeightBody'
import BaseHeader from './components/Header'
import BaseMain from './components/Main'
import BaseColumn from './components/Column'
import BaseCard from './components/Card'

const Main = adaptTheme(theme => ({
}), BaseMain)

const ScrollableColumn = adaptTheme(theme => ({
  childSpacing: theme.spacing,
  padding: theme.padding,
  bg: theme.dark.toHSV(),
}), BaseColumn)

const TalkItem = adaptTheme(theme => ({
  bg: theme.light.lightenByRatio(0.3).toHSV(),
  main: theme.dark.darkenByRatio(0.3).toHSV(),
  alt: theme.dark.desaturateByRatio(0.8).lightenByRatio(0.2).toHSV(),
}), BaseCard)

const AdminItem = adaptTheme(theme => ({
  bg: theme.light.lightenByRatio(0.3).toHSV(),
  main: theme.dark.darkenByRatio(0.3).toHSV(),
}), BaseCard)

const BreakItem = adaptTheme(theme => ({
  bg: theme.dark.darkenByRatio(0.3).toHSV(),
  main: theme.light.lightenByRatio(0.3).toHSV(),
  hatchColor: theme.dark.darkenByRatio(0.2).toHSV(),
}), BaseCard)

const Header = adaptTheme(theme => ({
  bg: theme.light.lightenByRatio(0.3).toHSV(),
  color: theme.dark.darkenByRatio(0.3).toHSV(),
}), BaseHeader)

const FixedHeightBody = adaptTheme(theme => ({
}), BaseFixedHeightBody)

export { FixedHeightBody, Main, ScrollableColumn, AdminItem, TalkItem, BreakItem, Header }
