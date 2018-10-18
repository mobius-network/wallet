import { get } from 'lodash';
import { createSelector } from 'reselect';
import { getSellAsset, getBuyAsset } from 'state/utils';

export const getCurrencies = state => state.prices;

export const getAssetPrice = createSelector(
  getSellAsset,
  getBuyAsset,
  getCurrencies,
  (sell, buy, prices) => get(prices, `${sell}.${buy}`) || 0
);
