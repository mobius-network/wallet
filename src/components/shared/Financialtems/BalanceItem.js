/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  BalanceSwiper,
} from './styles';

class BalanceItem extends Component {
  static propTypes = {
    balance: PropTypes.number,
    icon: PropTypes.any.isRequired,
    onPress: PropTypes.func,
    onRemove: PropTypes.func.isRequired,
    price: PropTypes.number,
    removable: PropTypes.bool,
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

  swipeoutBtns = [
    {
      text: 'Remove',
      backgroundColor: '#F00',
      onPress: this.props.onRemove,
    },
  ];

  render() {
    const {
      icon,
      title,
      price,
      balance,
      usdBalance,
      symbol,
      removable,
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

    const balanceContainer = (
      <Container>
        <Image size={40} source={icon} />
        <Info>
          <Title>{title}</Title>
          <Description>{`$${toFixed(price)}`}</Description>
        </Info>
        {maybeAmountInfo}
      </Container>
    );

    return removable ? (
      <BalanceSwiper ref={this.swiper} right={this.swipeoutBtns}>
        {balanceContainer}
      </BalanceSwiper>
    ) : (
      balanceContainer
    );
  }
}

export default BalanceItem;
