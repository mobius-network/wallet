import { createSelector } from 'reselect';

import { getKeypairFor } from 'state/auth/selectors';
import { getPrices } from 'state/prices/selectors';

const mapAsset = {
  native: 'xlm',
  MOBI: 'mobi',
};

export const getPayments = createSelector(
  getKeypairFor,
  getPrices,
  state => state.payments,
  (keypair, prices, payments) => {
    const publicKey = keypair.publicKey();

    return payments.map((payment) => {
      let type = '';

      if (payment.type === 'create_account') type = 'account';
      else if (payment.from === publicKey) type = 'sent';
      else type = 'received';

      const asset = mapAsset[payment.assetType]
        || mapAsset[payment.assetCode]
        || mapAsset.native;

      const usdRate = (prices[asset] && prices[asset].usd) || 0;

      const amount = parseFloat(payment.amount || payment.startingBalance);
      const usdAmount = usdRate * parseFloat(amount);

      return {
        type,
        asset,
        amount,
        usdAmount,
        id: payment.id,
        createdAt: new Date(payment.createdAt),
      };
    });
  }
);
