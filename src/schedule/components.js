import Color from 'color-js'
import * as componentLibrary from '../components'

const general = {
  // https://randoma11y.com/#/?_k=v2euhx
  light: Color('hsl(44, 46%, 69%)'),
  dark: Color('hsl(307, 78%, 23%)'),
  maxWidth: 500,
  spacing: 0.8,
}

const Main = componentLibrary.createMain({
  bg: general.dark.toString(),
})

const ScrollableColumn = componentLibrary.createColumn({
  childSpacing: general.spacing,
  bg: general.dark.toString(),
  innerMaxWidth: general.maxWidth,
  marginNonHighlighted: 1,
})

const TalkCard = componentLibrary.createCard({
  backgroundColor: general.light.lightenByRatio(0.3).toString(),
  mainColor: general.dark.darkenByRatio(0.3).toString(),
  altColor: general.dark.desaturateByRatio(0.8).toString(),
  backgroundColor_highlighted: general.light.lightenByRatio(0.1).toString(),
  altColor_highlighted: general.dark.desaturateByRatio(0.3).toString(),
  padding: general.spacing,
  collapseable: true,
})

const AdminCard = componentLibrary.createCard({
  backgroundColor: general.light.lightenByRatio(0.3).toString(),
  mainColor: general.dark.darkenByRatio(0.3).toString(),
  altColor: general.dark.desaturateByRatio(0.8).toString(),
  backgroundColor_highlighted: general.light.lightenByRatio(0.1).toString(),
  altColor_highlighted: general.dark.desaturateByRatio(0.3).toString(),
  padding: general.spacing,
})

const BreakCard = componentLibrary.createCard({
  mainColor: general.light.lightenByRatio(0.3).toString(),
  altColor: general.light.desaturateByRatio(0.8).toString(),
  background: componentLibrary.helpers.createHatchedBackground({
    bgColor: general.dark.darkenByRatio(0.3).toString(),
    hatchColor: general.dark.darkenByRatio(0.2).toString(),
  }),
  padding: general.spacing,
})

const Header = componentLibrary.createHeader({
  bg: general.light.lightenByRatio(0.1).toString(),
  color: general.dark.darkenByRatio(0.3).toString(),
  innerMaxWidth: general.maxWidth,
  paddingVertical: general.spacing,
  paddingHorizontal: general.spacing*1.6,
})

const FixedHeightBody = componentLibrary.createFixedHeightBody()

export { FixedHeightBody, Main, ScrollableColumn, AdminCard, TalkCard, BreakCard, Header }
