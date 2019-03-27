import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import SvgUri from 'react-native-svg-uri';

import styles from './styles';

export default class Brand extends Component {
  static defaultProps = {
    style: {},
  };

  static propTypes = {
    style: PropTypes.any,
  };

  render() {
    const { style } = this.props;

    return (
      <View style={[styles.view, style]}>
        <SvgUri
          source={require('../../../../assets/images/brand.svg')}
          width="24"
          height="24"
        />
      </View>
    );
  }
}
