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
} from './styles';
import generateTrendElement from '../../../utils/generateTrendElement';

class CurrencyItem extends Component {
  static propTypes = {
    icon: PropTypes.any,
    onPress: PropTypes.func,
    percentChangeIn24Hours: PropTypes.string,
    price: PropTypes.string,
    symbol: PropTypes.string,
    t: PropTypes.func.isRequired,
    title: PropTypes.string,
  };

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.price !== this.props.price
      || nextProps.percentChangeIn24Hours !== this.props.percentChangeIn24Hours
    );
  }

  render() {
    const {
      icon, title, symbol, price, percentChangeIn24Hours,
    } = this.props;
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
            {generateTrendElement(percentChangeIn24Hours)}
          </AmountInfo>
        </Container>
      </TouchableOpacity>
    );
  }
}

export default CurrencyItem;
