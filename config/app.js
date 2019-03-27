import { Platform, YellowBox } from 'react-native';

import _ from 'lodash';
import Config from 'react-native-config';

const appId = Config.APPLICATION_ID || Config.APP_ID || 'com.ihs';

export default {
  appId,
  uriPrefix: `${appId}://`,

  // Environment
  dev: global.__DEV__,
  environment: Config.ENVIRONMENT || (global.__DEV__ ? 'dev' : 'production'),

  // DevTools
  hostname: Config.DEVTOOLS_HOSTNAME,
  port: Platform.OS === 'ios' ? Config.DEVTOOLS_PORT_IOS : Config.DEVTOOLS_PORT_ANDROID,

  // Navigation
  stackNavigator: {
    // headerMode: 'none',
    cardStyle: { backgroundColor: '#fff' }
  },
};

// Ignore Warnings
YellowBox.ignoreWarnings([
  'Warning: Overriding previous layout animation with new one before the first began',
  'Task orphaned for request ',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
  'Module RCTImageLoader requires main queue setup since it overrides',
  'Module RCTVideoManager requires main queue setup since it overrides',
  '[RNDebugger]',
  'Animated: ',
  'Warning: isMounted',
]);
