import { StyleSheet, Platform, Dimensions, StatusBar } from 'react-native';
import vars from './vars';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: vars.colors.white,
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  textCenter: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  content: {
    flex: 1,
    padding: 30,
    backgroundColor: 'transparent'
  },
  contentScroll: {
    flex: 1,
    paddingBottom: 30,
    backgroundColor: 'transparent',
  },
  contentCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  menuIcon: {
    color: vars.colors.gray2,
    fontSize: 24,
    marginLeft: 10,
    marginRight: 10,
  },
  modal: {
    flex: 1,
    margin: 0,
    marginTop: 0,
    padding: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  modalOverlay: {
    justifyContent: 'center',
    backgroundColor: '#000',
    opacity: 0.6,
    position: 'absolute',
    margin: 0,
    marginTop: 0,
    top: 0,
    left: 0,
    width,
    height,
  },
  modalContentWrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 10,
    margin: 15,
    marginTop: 25,
    position: 'relative',
    flexDirection: 'column',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .25)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 4
      },
      android: {
        elevation: 4
      }
    }),
  },
});
