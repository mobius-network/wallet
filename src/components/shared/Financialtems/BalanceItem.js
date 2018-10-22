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
    balance: PropTypes.number,
    icon: PropTypes.any.isRequired,
    onPress: PropTypes.func,
    price: PropTypes.number,
    symbol: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    usdBalance: PropTypes.number,
  };

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.price !== this.props.price
      || nextProps.usdBalance !== this.props.usdBalance
      || nextProps.balance !== this.props.balance
    );
  }

  render() {
    const {
      icon, title, price, balance, usdBalance, symbol,
    } = this.props;

    const maybeUsdBalance = usdBalance !== undefined ? (
        <MainAmount>{`$${toFixed(usdBalance)}`}</MainAmount>
    ) : null;

    const maybeBalance = balance !== undefined ? (
        <SecondaryAmount>{`${toFixed(balance)} ${symbol}`}</SecondaryAmount>
    ) : null;

    const maybeAmountInfo = usdBalance !== undefined && balance !== undefined ? (
        <AmountInfo>
          {maybeUsdBalance}
          {maybeBalance}
        </AmountInfo>
    ) : null;

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Container>
          <Image size={40} source={icon} />
          <Info>
            <Title>{title}</Title>
            <Description>{`$${toFixed(price)}`}</Description>
          </Info>
          {maybeAmountInfo}
        </Container>
      </TouchableOpacity>
    );
  }
}

export default BalanceItem;
