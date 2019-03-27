import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import IconFont from 'react-native-vector-icons/MaterialIcons';

import appStyles from '../../../styles';

export default class HeaderLeft extends Component {
  static propTypes = {
    navigationProps: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View style={appStyles.header}>
        <TouchableOpacity onPress={this.toggleDrawer}>
          <IconFont name="menu" style={appStyles.menuIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}
