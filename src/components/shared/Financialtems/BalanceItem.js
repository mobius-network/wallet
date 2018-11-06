/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toFixed } from 'utils';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Chart from 'components/shared/Chart';
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
  Trend,
  IconChangeType,
} from './styles';

class BalanceItem extends Component {
  static propTypes = {
    balance: PropTypes.number,
    change: PropTypes.number,
    icon: PropTypes.any.isRequired,
    onPress: PropTypes.func,
    onRemove: PropTypes.func.isRequired,
    price: PropTypes.number,
    removable: PropTypes.bool,
    symbol: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    usdBalance: PropTypes.number,
  };

  state = {
    isOpened: false,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.price !== this.props.price
      || nextProps.usdBalance !== this.props.usdBalance
      || nextProps.balance !== this.props.balance
      || nextState.isOpened !== this.state.isOpened
    );
  }

  swipeoutBtns = [
    {
      text: this.props.t('currencies.removeCurrency'),
      backgroundColor: '#F00',
      onPress: this.props.onRemove,
    },
  ];

  clickHandler = () => {
    this.setState({ isOpened: !this.state.isOpened });
  };

  renderTrend(change) {
    const icon = change && change !== '0';
    const changeIconName = change > 0
      ? {
        color: '#69f0ae',
        name: 'caret-up',
      }
      : {
        color: '#ff5252',
        name: 'caret-down',
      };
    const changeAmount = change !== undefined ? `${change} %` : '-- %';
    return (
      <Trend>
        <SecondaryAmount>{changeAmount}</SecondaryAmount>
        {icon && (
          <IconChangeType>
            <Icon
              color={changeIconName.color}
              name={changeIconName.name}
              size={14}
            />
          </IconChangeType>
        )}
      </Trend>
    );
  }

  render() {
    const {
      icon,
      title,
      price,
      balance,
      change,
      usdBalance,
      symbol,
      removable,
    } = this.props;
    const { isOpened } = this.state;

    const maybeUsdBalance = usdBalance !== undefined ? (
        <MainAmount>{`$${toFixed(usdBalance)}`}</MainAmount>
    ) : null;

    const maybeBalance = balance !== undefined ? (
        <SecondaryAmount>{`${toFixed(balance)} ${symbol}`}</SecondaryAmount>
    ) : null;

    const maybeAmountInfo = (
      <AmountInfo>
        {this.renderTrend(toFixed(change, 2))}
        {maybeUsdBalance}
        {maybeBalance}
      </AmountInfo>
    );

    const balanceContainer = (
      <TouchableOpacity onPress={this.clickHandler}>
        <Container>
          <Image size={40} source={icon} />
          <Info>
            <Title>{title}</Title>
            <Description>{`$${toFixed(price)}`}</Description>
          </Info>
          {maybeAmountInfo}
        </Container>
        {isOpened && <Chart asset={symbol.toLowerCase()} />}
      </TouchableOpacity>
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
