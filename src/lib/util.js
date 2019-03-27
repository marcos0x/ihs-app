import { Platform } from 'react-native';

const fonts = {
  OpenSans: {
    weights: {
      ExtraBold: '800',
      Bold: '700',
      SemiBold: '600',
      Light: '300',
      Normal: '400'
    },
    styles: {
      Italic: 'italic'
    }
  },
}

/**
 * Generate styles for a font with given weight and style
 * @example font({ family: 'OpenSans', weight: 'Light', style: 'Italic' }) 
 */

export const font = (options = {}) => {
  let { weight, style, family } = Object.assign({
    weight: null,
    style: null,
    family: 'OpenSans'
  }, options)

  const { weights, styles } = font[family]

  if (Platform.OS === 'android') {
    weight = weights[weight] ? weight : ''
    style = styles[style] ? style : ''

    const suffix = weight + style

    return {
      fontFamily: family + (suffix.length ? `-${suffix}` : '')
    }
  } else {
    weight = weights[weight] || weights.Normal
    style = styles[style] || 'normal'

    return {
      fontFamily: family,
      fontWeight: weight,
      fontStyle: style
    }
  }
}
