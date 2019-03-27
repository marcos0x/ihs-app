import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import AccountItemTitle from '../../atoms/AccountItemTitle';
import AccountItemValue from '../../atoms/AccountItemValue';
import AccountItemCurrency from '../../atoms/AccountItemCurrency';

import appStyles from '../../../styles';
import styles from './styles';

export default class AccountItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    currency: PropTypes.string,
    isFirst: PropTypes.bool,
  };

  render() {
    const { title, value, currency, isFirst } = this.props;

    return (
      <View style={[styles.view, isFirst ? styles.first : {}]}>
        <AccountItemTitle style={styles.title}>
          {title}
        </AccountItemTitle>
        <View style={[appStyles.flex, appStyles.row, appStyles.justifyStart, appStyles.alignEnd]}>
          <AccountItemValue style={styles.value}>
            {value}
          </AccountItemValue>
          <AccountItemCurrency style={styles.currency}>
            {currency}
          </AccountItemCurrency>
        </View>
      </View>
    );
  }
}
