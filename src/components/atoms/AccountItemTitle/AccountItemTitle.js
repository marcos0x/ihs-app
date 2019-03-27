import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class AccountItemTitle extends Component {
  static defaultProps = {
    style: {},
  };

  static propTypes = {
    style: PropTypes.any,
    children: PropTypes.string,
  };

  render() {
    const { style, children } = this.props;

    return (
      <View style={[styles.view, style]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    );
  }
}
