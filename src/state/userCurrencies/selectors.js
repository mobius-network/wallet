import { get } from 'lodash';
import { createSelector } from 'reselect';
import { getBuyAsset } from 'state/utils';

export const getCurrencies = state => state.currencies;
export const getUserCurrencies = (state) => {
  console.log('LOG', JSON.stringify(state));
  return state.userCurrencies || [];
};

export const getUserAssets = createSelector(
  getUserCurrencies,
  getBuyAsset,
  getCurrencies,
  (userCurrencies, buy, currencies) => userCurrencies
    .filter(currencyId => currencyId in currencies)
    .map(currencyId => get(currencies, `${currencyId}`))
);
