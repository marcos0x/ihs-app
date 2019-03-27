import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import IconFont from 'react-native-vector-icons/MaterialIcons';

import appStyles from '../../../styles';

export default class HeaderRight extends Component {
  static propTypes = {
    navigationProps: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={appStyles.header}>
        <TouchableOpacity onPress={() => {}}>
          <IconFont name="more-horiz" style={appStyles.menuIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}
