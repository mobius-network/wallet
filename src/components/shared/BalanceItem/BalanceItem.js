import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  CurrencyIcon,
  AssetInfo,
  Asset,
  Price,
  AmountInfo,
  UsdAmount,
  Amount,
} from './styles';

class BalanceItem extends Component {
  static propTypes = {
    description: PropTypes.string,
    icon: PropTypes.string,
    mainAmount: PropTypes.string,
    secondaryAmount: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    const {
      icon,
      title,
      description,
      mainAmount,
      secondaryAmount,
    } = this.props;

    return (
      <Container>
        <CurrencyIcon name={icon} size={40} />

        <AssetInfo>
          <Asset>{title}</Asset>
          <Price>{description}</Price>
        </AssetInfo>

        <AmountInfo>
          <UsdAmount>{mainAmount}</UsdAmount>
          <Amount>{secondaryAmount}</Amount>
        </AmountInfo>
      </Container>
    );
  }
}

export default BalanceItem;
