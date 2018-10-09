import { capitalize } from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import ItemChart from './ItemChart';
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
    amount: PropTypes.number,
    asset: PropTypes.string,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        close: PropTypes.number.isRequired,
        high: PropTypes.number.isRequired,
        low: PropTypes.number.isRequired,
        open: PropTypes.number.isRequired,
        time: PropTypes.number.isRequired,
        volumefrom: PropTypes.number.isRequired,
        volumeto: PropTypes.number.isRequired,
      })
    ).isRequired,
    usdAmount: PropTypes.number,
    usdPrice: PropTypes.number,
  };

  state = {
    isOpened: false,
  };

  clickHandler = () => {
    this.setState({ isOpened: !this.state.isOpened });
  };

  render() {
    const {
      asset, amount, usdAmount, usdPrice, history,
    } = this.props;

    return (
      <TouchableOpacity onPress={this.clickHandler}>
        <Container margin={this.isOpened && history !== null}>
          <CurrencyIcon name={`currency${capitalize(asset)}`} size={40} />

          <AssetInfo>
            <Asset>{asset.toUpperCase()}</Asset>
            <Price>${usdPrice.toFixed(6)}</Price>
          </AssetInfo>

          <AmountInfo>
            <UsdAmount>${usdAmount.toFixed(6)}</UsdAmount>
            <Amount>
              {amount} {asset.toUpperCase()}
            </Amount>
          </AmountInfo>
        </Container>
        {this.state.isOpened
          && history && (
            <ItemChart asset={asset.toUpperCase()} history={history} />
        )}
      </TouchableOpacity>
    );
  }
}

export default BalanceItem;
