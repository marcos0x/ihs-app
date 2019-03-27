import React, { Component } from 'react';
import { Linking, Platform, StatusBar, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

import AppContainer from '../navigation/AppContainer';

import appStyles from '../styles';
import appConfig from '../../config/app';

export default class App extends Component {
  componentDidMount() {
    Linking.addEventListener('url', this.handleUrl);

    Linking.getInitialURL()
      .then((url) => {
        if (url) {
          Linking.openURL(url);
        }
      })
      .catch(error => console.log('Error: ', error));
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleUrl);
  }

  // gets the current screen from navigation state
  getActiveRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }

    const route = navigationState.routes[navigationState.index];

    // dive into nested navigators
    if (route.routes) {
      return this.getActiveRouteName(route);
    }

    return route.routeName;
  }

  navigate(routeName) {
    this.navigator.dispatch(NavigationActions.navigate({ routeName }));
  }

  handleUrl = ({ url }) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          // console.log(url);
        }
      })
      .catch(error => console.log('Error: ', error));
  }

  render() {
    return (
      <View style={appStyles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppContainer
          ref={(nav) => { this.navigator = nav; }}
          uriPrefix={appConfig.uriPrefix}
          onNavigationStateChange={(prevState, currentState, action) => {
            const currentScreen = this.getActiveRouteName(currentState);
            const prevScreen = this.getActiveRouteName(prevState);

            if (prevScreen !== currentScreen) {
              // console.log({ currentScreen });
            }
          }}
        />
      </View>
    );
  }
}
