import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from './Button';
import TokenMenu from './Menu';

import {
  Amount,
  BaseToken,
  BaseWrapper,
  Border,
  Button,
  CounterToken,
  CounterWrapper,
  Container,
  DefaultIcon,
  Result,
  Text,
  TokenIcon,
  Wrapper,
} from './styles';

class ExchangeCalculator extends Component {
  static propTypes = {
    clearSearchQuery: PropTypes.func,
    getCurrencyIconUri: PropTypes.func,
    getExchangeRate: PropTypes.func,
    onActiveWidget: PropTypes.func,
  };

  state = {
    price: 'Result',
    menu: {},
  };

  complete = async () => {
    const { amount, baseToken, counterToken } = this.state;
    if (
      Boolean(amount)
      && !Number.isNaN(parseInt(amount, 10))
      && Boolean(baseToken)
      && Boolean(counterToken)
    ) {
      const price = await this.props.getExchangeRate(
        amount,
        baseToken.symbol,
        counterToken.symbol
      );
      this.setState({
        price,
      });
    }
  };

  tokenUpdate = (type, value) => {
    const { clearSearchQuery, onActiveWidget } = this.props;
    this.setState({ [type]: value, menu: {} }, this.complete);
    onActiveWidget(false);
    clearSearchQuery();
  };

  swap = () => {
    this.setState(
      {
        baseToken: this.state.counterToken,
        counterToken: this.state.baseToken,
      },
      this.complete
    );
  };

  showTokenMenu = (value) => {
    const {
      menu: { base, counter },
    } = this.state;
    const { clearSearchQuery } = this.props;
    const baseValue = value === 'base' ? base !== true : false;
    const counterValue = value === 'counter' ? counter !== true : false;
    this.setState({ menu: { base: baseValue, counter: counterValue } });
    const activeMenu = !!(baseValue || counterValue);
    this.props.onActiveWidget(activeMenu);
    !activeMenu && clearSearchQuery();
  };

  onChange = async (value) => {
    this.setState({ amount: value }, this.complete);
  };

  renderIcon = token => (token ? (
      <TokenIcon
        alt="Token"
        source={{ uri: this.props.getCurrencyIconUri(token) }}
      />
  ) : (
      <DefaultIcon name="search" size={14} />
  ));

  render() {
    const {
      onChange, renderIcon, showTokenMenu, swap, tokenUpdate,
    } = this;
    const {
      amount,
      baseToken,
      counterToken,
      menu: { base, counter },
      price,
    } = this.state;
    return (
      <Border>
        <Container>
          <Amount
            name="amount"
            onChangeText={onChange}
            placeholder="Amount"
            value={amount || ''}
          />
          <BaseWrapper>
            <Text>{baseToken && baseToken.symbol}</Text>
            <BaseToken onPress={() => showTokenMenu('base')}>
              <TokenMenu
                menu={base}
                updateToken={value => tokenUpdate('baseToken', value)}
              >
                {renderIcon(baseToken && baseToken.id)}
              </TokenMenu>
            </BaseToken>
          </BaseWrapper>
          <Wrapper>
            <Button>
              <ButtonComponent onSwap={swap} />
            </Button>
            <CounterWrapper>
              <CounterToken onPress={() => showTokenMenu('counter')}>
                <TokenMenu
                  menu={counter}
                  updateToken={value => tokenUpdate('counterToken', value)}
                >
                  {renderIcon(counterToken && counterToken.id)}
                </TokenMenu>
              </CounterToken>
              <Text>{counterToken && counterToken.symbol}</Text>
            </CounterWrapper>
          </Wrapper>
          <Result>
            <Text>{price}</Text>
          </Result>
        </Container>
      </Border>
    );
  }
}

export default ExchangeCalculator;
