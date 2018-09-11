import axios from 'axios';
import {
  COINMARKETCAP_API_URL,
  COINMARKETCAP_API_KEY,
} from 'react-native-dotenv';

export const currencies = {
  2429: 'mobi',
  512: 'xlm',
};

/**
 * `axios` instance preconfigured to interact with Coinmarketcap API.
 * @param {Object} [config={}] - axios request config object
 */
export const client = (config = {}) => axios({
  baseURL: COINMARKETCAP_API_URL,
  method: 'GET',
  headers: {
    'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
  },
  ...config,
});

/**
 * Get latest market quotes for all available currencies
 * @returns {Promise}
 */
export const getMarketQuotes = () => {
  const config = {
    url: '/cryptocurrency/quotes/latest',
    params: {
      id: Object.keys(currencies).join(','),
      convert: 'USD',
    },
  };

  return client(config);
};
