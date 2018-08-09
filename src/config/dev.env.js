const prodEnv = require('./prod.env');

module.exports = Object.assign(prodEnv, {
  API_URL: 'https://beta.mobius.network/api/v1',
  MOBI_ASSET_ISSUER: 'GDRWBLJURXUKM4RWDZDTPJNX6XBYFO3PSE4H4GPUL6H6RCUQVKTSD4AT',
  MOBI_ASSET: 'MOBI',
  NODE_ENV: 'development',
  STELLAR_HORIZON_URL: 'https://horizon-testnet.stellar.org',
  STELLAR_TESTNET: 'true',
});
