import { StyleSheet } from 'react-native';
import vars from '../../../styles/vars';

export default StyleSheet.create({
  view: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    paddingHorizontal: 15,
  },
  text: {
    ...vars.fonts.OpenSans,
    fontSize: 20,
    color: vars.colors.white
  }
});
