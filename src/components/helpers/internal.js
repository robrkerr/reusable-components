
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

export const makeGetThemeFromStatus = (theme) => (attr, status) => (
  theme[attr + statusToSuffix(status)] || theme[attr]
)
