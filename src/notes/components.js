import { adaptTheme } from '../theme-helpers'
import * as componentLibrary from '../components'

const Main = adaptTheme(theme => ({
  bg: theme.light.toString(),
}), componentLibrary.Main)

const Gallery = adaptTheme(theme => ({
  childSpacing: theme.spacing,
  padding: theme.spacing,
  bg: theme.light.toString(),
  innerMaxWidth: theme.maxWidth,
}), componentLibrary.Gallery)

const Item = adaptTheme(theme => ({
  backgroundColor: theme.light.lightenByRatio(0.3).toString(),
  mainColor: theme.dark.lightenByRatio(0.8).toString(),
  altColor: theme.dark.desaturateByRatio(0.5).lightenByRatio(1).toString(),
  padding: theme.spacing,
}), componentLibrary.Card)

const Header = adaptTheme(theme => ({
  bg: theme.light.lightenByRatio(0.3).toString(),
  mainColor: theme.dark.lightenByRatio(0.8).toString(),
  // innerMaxWidth: theme.maxWidth,
  paddingVertical: theme.spacing,
  paddingHorizontal: theme.spacing*1.2,
}), componentLibrary.Header)

const FixedHeightBody = adaptTheme(theme => ({}), componentLibrary.FixedHeightBody)

export { FixedHeightBody, Main, Gallery, Item, Header }
