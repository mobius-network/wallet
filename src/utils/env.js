import {
  API_URL,
  MOBI_ASSET,
  STELLAR_TESTNET,
  STELLAR_HORIZON_URL,
} from 'react-native-dotenv';
import { Asset } from 'stellar-sdk';

export const isTest = process.env.NODE_ENV === 'test';
export const isDev = process.env.NODE_ENV === 'development';
export const isBeta = process.env.NODE_ENV === 'beta';
export const isProduction = process.env.NODE_ENV === 'production';

export const apiUrl = API_URL || 'https://mobius.network/api/v1';
export const mobiAsset = new Asset(
  ...(MOBI_ASSET || 'MOBI-GA6HCMBLTZS5VYYBCATRBRZ3BZJMAFUDKYYF6AH6MVCMGWMRDNSWJPIH').split('-')
);
export const stellarTestnet = STELLAR_TESTNET === 'true';
export const stellarHorizonUrl = STELLAR_HORIZON_URL || 'https://horizon.stellar.mobius.network';

if (isDev) {
  console.disableYellowBox = true;

  // Show network requests in remote debugger
  global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
}
