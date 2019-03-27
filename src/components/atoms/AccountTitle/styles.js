import { StyleSheet } from 'react-native';
import vars from '../../../styles/vars';

export default StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 30,
    marginTop: 10,
  },
  text: {
    ...vars.fonts.OpenSans,
    fontSize: 16,
    color: vars.colors.red2,
  },
});
