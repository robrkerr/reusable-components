import { adaptTheme } from 'styled-components-themes'
import BaseFixedHeightBody from '../components/FixedHeightBody'
import BaseHeader from '../components/Header'
import BaseMain from '../components/Main'
import BaseGallery from '../components/Gallery'
import BaseCard from '../components/Card'

const Main = adaptTheme(theme => ({
  bg: theme.light.toHSV(),
}), BaseMain)

const Gallery = adaptTheme(theme => ({
  childSpacing: theme.spacing,
  padding: theme.spacing,
  bg: theme.light.toHSV(),
  innerMaxWidth: theme.maxWidth,
}), BaseGallery)

const Item = adaptTheme(theme => ({
  bgColor: theme.light.lightenByRatio(0.3).toHSV(),
  mainColor: theme.dark.lightenByRatio(0.8).toHSV(),
  altColor: theme.dark.desaturateByRatio(0.5).lightenByRatio(1).toHSV(),
  padding: theme.spacing,
}), BaseCard)

const Header = adaptTheme(theme => ({
  bg: theme.light.lightenByRatio(0.3).toHSV(),
  mainColor: theme.dark.lightenByRatio(0.8).toHSV(),
  innerMaxWidth: theme.maxWidth,
  paddingVertical: theme.spacing,
  paddingHorizontal: theme.spacing*1.2,
}), BaseHeader)

const FixedHeightBody = adaptTheme(theme => ({
}), BaseFixedHeightBody)

export { FixedHeightBody, Main, Gallery, Item, Header }
