import { createSelector } from 'reselect';
import { getBalance } from '../account';

export const getCurrencies = state => state.currencies;
export const getUserCurrencies = state => state.userCurrencies;

export const getUserCurrenciesBalances = createSelector(
  getUserCurrencies,
  getCurrencies,
  getBalance,
  (userCurrencies, currencies, accountBalance) => {
    const currenciesIds = Object.keys(userCurrencies);
    return currenciesIds
      .filter(currencyId => currencyId in currencies)
      .map(currencyId => currencies[currencyId])
      .map(({
        symbol, id, name, quote: { USD: { price } },
      }) => {
        const currencySupported = userCurrencies[id].supported;
        if (currencySupported) {
          const balanceSymbol = symbol === 'XLM' ? 'native' : symbol.toLowerCase();
          const currencyBalance = accountBalance
            ? accountBalance[balanceSymbol]
            : undefined;
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
            removable: false,
          };
        }

        return {
          symbol,
          id,
          name,
          price,
          removable: true,
        };
      });
  }
);
