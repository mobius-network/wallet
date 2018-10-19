/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

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
            <Description>{`$${price.toFixed(6)}`}</Description>
          </Info>

          <AmountInfo>
            <MainAmount>{`$${usdBalance.toFixed(6)}`}</MainAmount>
            <SecondaryAmount>{`${balance.toFixed(
              6
            )} ${symbol}`}</SecondaryAmount>
          </AmountInfo>
        </Container>
      </TouchableOpacity>
    );
  }
}

export default BalanceItem;
