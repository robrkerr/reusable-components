
const statusToSuffix = (status) => {
  switch (status) {
    case 'highlighted': {
      return '_highlighted'
    }
    case 'suppressed': {
      return '_suppressed'
    }
    default: {
      return ''
    }
  }
}

export const getThemeFromStatus = (theme, attr, status) => (
  theme[attr + statusToSuffix(status)] || theme[attr]
)

const shadowFromParameters = (x, y, blur, spread, alpha) => (
  `${x}px ${y}px ${blur}px ${spread} rgba(0, 0, 0, ${alpha})`
)


// adapted from: http://stackoverflow.com/questions/30533055/calculating-shadow-values-for-all-material-design-elevations
export const getShadowsForElevation = (elevation) => {
  if (elevation === 0) {
    return 'none'
  } else {
    const ambientY = elevation
    const ambientBlur = (elevation === 1) ? 3 : (elevation * 2)
    const ambientAlpha = (elevation + 10 + (elevation / 9.38)) / 100
    // const adjustedAmbientAlpha = 1 - ((1 - ambientAlpha) * (1 - bgDarkeness))
    const ambientShadow = shadowFromParameters(0, ambientY, ambientBlur, 0, ambientAlpha)
    const directY = (elevation < 10) ? (Math.floor(elevation / 2) + 1) : (elevation - 4)
    const directBlur = (elevation === 1) ? 3 : (elevation * 2)
    const directAlpha = (24 - Math.round(elevation / 10)) / 100
    // const adjustedDirectAlpha = 1 - ((1 - directAlpha) * (1 - bgDarkeness))
    const directShadow = shadowFromParameters(0, directY, directBlur, 0, directAlpha)
    return ambientShadow + ', ' + directShadow
  }
}
