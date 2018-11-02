import { createSelector } from 'reselect';
import { getBalance } from '../account';

export const getCurrencies = state => state.currencies;
export const getUserCurrencies = state => state.userCurrencies;

export const getUserCurrenciesData = createSelector(
  getUserCurrencies,
  getCurrencies,
  (userCurrencies, currencies) => {
    const currenciesIds = Object.keys(userCurrencies);
    return currenciesIds
      .filter(currencyId => currencyId in currencies)
      .map(currencyId => ({
        data: currencies[currencyId],
        supported: userCurrencies[currencyId].supported,
      }));
  }
);

export const getUserCurrenciesSymbols = createSelector(
  getUserCurrenciesData,
  userCurrenciesData => userCurrenciesData.map(currency => currency.data.symbol)
);

export const getUserCurrenciesBalances = createSelector(
  getUserCurrenciesData,
  getBalance,
  (userCurrenciesData, accountBalance) => userCurrenciesData.map(
    ({
      data: {
        symbol,
        id,
        name,
        quote: {
          // eslint-disable-next-line camelcase
          USD: { price, percent_change_24h },
        },
      },
      supported,
    }) => {
      if (supported) {
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
          change: percent_change_24h,
          removable: false,
        };
      }

      return {
        symbol,
        id,
        name,
        price,
        change: percent_change_24h,
        removable: true,
      };
    }
  )
);
