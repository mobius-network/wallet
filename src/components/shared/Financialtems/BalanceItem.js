/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { toFixed } from 'utils';

import {
  Container,
  Image,
  Info,
  Title,
  Description,
  AmountInfo,
  MainAmount,
  SecondaryAmount,
} from './styles';

class BalanceItem extends Component {
  static propTypes = {
    balance: PropTypes.string,
    icon: PropTypes.any,
    onPress: PropTypes.func,
    price: PropTypes.string,
    symbol: PropTypes.string,
    title: PropTypes.string,
    usdBalance: PropTypes.string,
  };

  render() {
    const {
      icon, title, price, balance, usdBalance, symbol,
    } = this.props;
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Container>
          <Image size={40} source={icon} />
          <Info>
            <Title>{title}</Title>
            <Description>{`$${toFixed(price)}`}</Description>
          </Info>

          <AmountInfo>
            <MainAmount>{`$${toFixed(usdBalance)}`}</MainAmount>
            <SecondaryAmount>{`${toFixed(balance)} ${symbol}`}</SecondaryAmount>
          </AmountInfo>
        </Container>
      </TouchableOpacity>
    );
  }
}

export default BalanceItem;
