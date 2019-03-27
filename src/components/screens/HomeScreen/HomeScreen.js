import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import AccountItems from '../../organisms/AccountItems';

import appStyles from '../../../styles';
import styles from './styles';
import AccountTitle from '../../atoms/AccountTitle';
import SectionHeader from '../../atoms/SectionHeader';

const items = [
  {
    id: 1,
    title: 'ASSETS',
    value: '18,961,847',
    currency: 'USD',
  },
  {
    id: 2,
    title: 'LIQUIDITY',
    value: '3,110,573',
    currency: 'USD',
  },
  {
    id: 3,
    title: 'LIABILITIES',
    value: '3,110,573',
    currency: 'USD',
  }
];

const accounts = [
  {
    id: 11,
    number: '00011',
    items
  },
];

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={appStyles.container}>
        <ScrollView
          style={appStyles.container}
          contentContainerStyle={appStyles.contentContainer}
        >
          <SectionHeader>HOME</SectionHeader>
          {accounts.map((account, i) => (
            <View key={account.id}>
              <AccountTitle>{account.number}</AccountTitle>
              <AccountItems items={account.items} />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
