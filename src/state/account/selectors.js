import { createSelector } from 'reselect';
import { parseBalance, parsedBalanceValue } from '@mobius-network/core';

import {
  getAsset, getMobiAsset, getNativeAsset, getFixed,
} from 'state/utils';

export const getMasterAccount = state => state.masterAccount;

export const createBalanceSelector = accountSelector =>
  createSelector(accountSelector, account => parseBalance(account));

export const createAssetBalanceSelector = (
  balanceSelector,
  assetSelector = getAsset
) =>
  createSelector([balanceSelector, assetSelector], (balance, asset) => {
    if (!balance) {
      return 0;
    }

    return parsedBalanceValue(balance, asset);
  });

export const getBalance = createBalanceSelector(getMasterAccount);
export const getAssetBalance = createAssetBalanceSelector(getBalance);
export const getMobiBalance = createAssetBalanceSelector(
  getBalance,
  getMobiAsset
);
export const getNativeBalance = createAssetBalanceSelector(
  getBalance,
  getNativeAsset
);

// TODO: fallback to getPublicKeyFor in case if account is not funded yet
export const getAccountId = createSelector(
  getMasterAccount,
  account => account.id
);

export const getAssetValueFixed = createSelector(
  [getAssetBalance, getFixed],
  (assetBalance, fixed) => {
    if (!assetBalance) {
      return 0;
    }
    return assetBalance.toFixed(fixed);
  }
);

export const getMasterTrustlineCreated = createSelector(
  getBalance,
  balance => balance && balance.mobi !== undefined
);
