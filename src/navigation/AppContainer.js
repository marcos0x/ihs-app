import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainNavigator from './MainNavigator';

export default createAppContainer(createSwitchNavigator({
  Main: { screen: MainNavigator, path: '' }
}));
