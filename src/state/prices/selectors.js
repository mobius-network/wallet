import { get } from 'lodash';
import { createSelector } from 'reselect';
import { getSellAsset, getBuyAsset } from 'state/utils';
import { parsedBalanceValue } from '@mobius-network/core';

import { getAssetBalance, getBalance } from 'state/account/selectors';

export const getPrices = state => state.prices;

export const getAssetPrice = createSelector(
  getSellAsset,
  getBuyAsset,
  getPrices,
  (sell, buy, prices) => get(prices, `${sell}.${buy}`)
);

export const getAssetInfo = createSelector(
  getSellAsset,
  getBuyAsset,
  getAssetBalance,
  getAssetPrice,
  (sellAsset, buyAsset, sellAmount, price) => ({
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

export const getUsdBalance = createSelector(
  getPrices,
  getBalance,
  (prices, balance) => {
    if (!balance) {
      return 0;
    }

    const total = Object.keys(prices).reduce(
      (sum, asset) =>
        sum + prices[asset].usd * parsedBalanceValue(balance, mapAssets[asset]),
      0
    );

    return total.toFixed(2);
  }
);
