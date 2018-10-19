import { get } from 'lodash';
import { createSelector } from 'reselect';
import { getSellAsset, getBuyAsset, getSellAmount } from 'state/utils';
import { parsedBalanceValue } from 'core';

import { getAssetBalance, getBalance } from 'state/account/selectors';

export const getPrices = state => state.prices;

export const getAssetPrice = createSelector(
  getSellAsset,
  getBuyAsset,
  getPrices,
  (sell, buy, prices) => get(prices, `${sell}.${buy}`) || 0
);

export const getAssetInfo = createSelector(
  getSellAsset,
  getBuyAsset,
  getAssetBalance,
  getAssetPrice,
  (sellAsset, buyAsset, sellAmount = 0, price = 0) => ({
    asset: sellAsset,
    amount: sellAmount,
    [`${buyAsset}Price`]: price,
    [`${buyAsset}Amount`]: sellAmount * price,
  })
);

const mapAssets = {
  mobi: 'mobi',
  xlm: 'native',
};

export const getUsdPrice = createSelector(
  getSellAmount,
  getAssetPrice,
  (sellAmount = 0, price = 0) => sellAmount * price
);

export const getUsdBalance = createSelector(
  getPrices,
  getBalance,
  (prices, balance) => {
    if (!balance) {
      return 0;
    }

    const total = Object.keys(prices).reduce(
      (sum, asset) => sum + prices[asset].usd * parsedBalanceValue(balance, mapAssets[asset]),
      0
    );

    return total.toFixed(2);
  }
);

export const getAssetChange = createSelector(getPrices, prices => Object.keys(prices).reduce((acc, asset) => {
  acc[asset] = prices[asset].change.toFixed(2);
  return acc;
}, {}));
