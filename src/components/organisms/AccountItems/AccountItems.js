import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import AccountItem from '../../molecules/AccountItem';

import styles from './styles';

export default class AccountItems extends Component {
  static defaultProps = {
    style: {},
  };

  static propTypes = {
    style: PropTypes.any,
    items: PropTypes.any,
  };

  render() {
    const { style, items } = this.props;

    return (
      <View style={[styles.view, style]}>
        {items.map((item, i) => (
          <AccountItem
            {...item}
            isFirst={i === 0}
            key={item.id}
            id={`item_${item.id}`}
          />
        ))}
      </View>
    );
  }
}
