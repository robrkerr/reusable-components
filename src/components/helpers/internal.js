
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

export const getThemeValue = (theme, attr, status) => {
  return theme[attr + statusToSuffix(status)] || theme[attr]
}
