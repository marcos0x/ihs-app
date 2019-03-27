import { Platform } from 'react-native';

export default {
  fonts: {
    ...Platform.select({
      ios: {
        OpenSans: { fontFamily: 'Open Sans', fontWeight: '400', fontStyle: 'normal' },
        OpenSansBold: { fontFamily: 'Open Sans', fontWeight: '700', fontStyle: 'normal' },
      },
      android: {
        OpenSans: { fontFamily: 'OpenSans-Regular' },
        OpenSansBold: { fontFamily: 'OpenSans-Bold' },
      },
    }),
  },
  colors: {
    black: '#000',
    gray1: '#111',
    gray2: '#222',
    gray3: '#333',
    gray4: '#444',
    gray5: '#555',
    gray6: '#666',
    gray7: '#777',
    gray8: '#888',
    gray9: '#999',
    gray10: '#aaa',
    gray11: '#bbb',
    gray12: '#ccc',
    gray13: '#ddd',
    gray14: '#eee',
    gray15: '#1D252D',
    gray16: '#666E77',
    red1: '#f00',
    red2: '#D9292A',
    red3: '#EC0000',
    blue1: '#00f',
    white: '#fff',
  },
};
