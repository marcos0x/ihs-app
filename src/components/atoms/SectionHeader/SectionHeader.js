import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import stylesVars from '../../../styles/vars';

export default class SectionHeader extends Component {
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
      <View style={[styles.view]}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[stylesVars.colors.gray15, stylesVars.colors.gray16]}
          style={[styles.gradient, style]}
        >
          <Text style={styles.text}>{children}</Text>
        </LinearGradient>
      </View>
    );
  }
}
