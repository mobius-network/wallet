import { get } from 'lodash';
import { createSelector } from 'reselect';
import { getBalance } from '../account';

export const getCurrencies = state => state.currencies;
export const getUserCurrencies = state => state.userCurrencies;

export const getUserCurrenciesBalances = createSelector(
  getUserCurrencies,
  getCurrencies,
  getBalance,
  (userCurrencies, currencies, accountBalance) => [...userCurrencies]
    .filter(currencyId => currencyId in currencies)
    .map(currencyId => get(currencies, `${currencyId}`))
    .map(({
      symbol, id, name, quote: { USD: { price } },
    }) => {
      const balanceSymbol = symbol === 'XLM' ? 'native' : symbol.toLowerCase();
      const currencyBalance = accountBalance[balanceSymbol];
      const balance = currencyBalance
        ? parseFloat(currencyBalance.balance)
        : 0;
      const usdBalance = balance * price;
      return {
        symbol,
        id,
        name,
        balance,
        usdBalance,
        price,
      };
    })
);
