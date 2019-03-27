import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Brand from '../components/atoms/Brand';
import HeaderLeft from '../components/atoms/HeaderLeft';
import HeaderRight from '../components/atoms/HeaderRight';
import HomeScreen from '../components/screens/HomeScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    path: 'home',
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Brand />,
      headerLeft: <HeaderLeft navigationProps={navigation} />,
      headerRight: <HeaderRight navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#fff',
      headerTitleContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      headerTitleStyle: {
        alignSelf: 'center',
      },
    })
  },
});

const MainNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    path: '',
    navigationOptions: {
      drawerLabel: 'Home'
    }
  },
});

export default MainNavigator;
