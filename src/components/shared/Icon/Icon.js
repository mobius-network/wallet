import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ViewPropTypes } from 'react-native';

import { Image } from './styles';

/* eslint-disable global-require */
const icons = {
  currencyMobi: require('./images/currency-mobi.png'),
  currencyXlm: require('./images/currency-xlm.png'),

  paymentSent: require('./images/payment-sent.png'),
  paymentReceived: require('./images/payment-received.png'),
  paymentAccount: require('./images/payment-received.png'),
};
/* eslint-enable global-require */

export default class Icon extends Component {
  static getImage(name) {
    return icons[name];
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    size: PropTypes.number,
    style: ViewPropTypes.style,
  };

  render() {
    const {
      name, style, size, onPress,
    } = this.props;

    const image = (
      <Image size={size} source={Icon.getImage(name)} style={style} />
    );

    if (onPress) {
      return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
          {image}
        </TouchableOpacity>
      );
    }

    return image;
  }
}
