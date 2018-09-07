import { Asset, Operation } from 'stellar-sdk';

export const assets = {
  mobi: new Asset(
    process.env.MOBI_ASSET,
    process.env.MOBI_ASSET_ISSUER
  ),
  native: Asset.native(),
  xlm: Asset.native(),
  usd: new Asset(
    'USD',
    'GA2HGBJIJKI6O4XEM7CZWY5PS6GKSXL6D34ERAJYQSPYA6X6AI7HYW36',
  ),
};

export function parseBalance(account) {
  if (!account) {
    return null;
  }

  return account.balances.reduce((acc, b) => {
    acc[(b.asset_code || b.asset_type).toLowerCase()] = b;
    return acc;
  }, {});
}

export function parsedBalanceValue(h, asset) {
  const balance = h[asset];

  if (!balance) {
    return 0;
  }

  return parseFloat(balance.balance);
}

export function createTrustline(asset) {
  return Operation.changeTrust({ asset });
}
