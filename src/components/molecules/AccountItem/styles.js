import { StyleSheet } from 'react-native';
import vars from '../../../styles/vars';

export default StyleSheet.create({
  view: {
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: vars.colors.gray9,
  },
  first: {
    borderTopWidth: 0,
  },
  value: {
    marginRight: 5,
  }
});
