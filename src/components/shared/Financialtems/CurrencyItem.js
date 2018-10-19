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
  Price,
  Change,
  ChangeTime,
  ChangeInfo,
} from './styles';

class CurrencyItem extends Component {
  static propTypes = {
    icon: PropTypes.any,
    onPress: PropTypes.func,
    percentChangeIn24Hours: PropTypes.number,
    price: PropTypes.string,
    symbol: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    const {
      icon, title, symbol, price, percentChangeIn24Hours,
    } = this.props;
    const positiveChange = percentChangeIn24Hours > 0;
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Container>
          <Image size={40} source={icon} />
          <Info>
            <Title>{title}</Title>
            <Description>{symbol}</Description>
          </Info>

          <AmountInfo>
            <Price>{price}</Price>
            <ChangeInfo>
              <Change positive={positiveChange}>
                {`${percentChangeIn24Hours}% `}
              </Change>
              <ChangeTime>in 24h</ChangeTime>
            </ChangeInfo>
          </AmountInfo>
        </Container>
      </TouchableOpacity>
    );
  }
}

export default CurrencyItem;
