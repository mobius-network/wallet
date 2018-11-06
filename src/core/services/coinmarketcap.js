import axios from 'axios';
import { isNil } from 'lodash';

export const currencies = {
  2429: 'mobi',
  512: 'xlm',
};

class CoinMarketCap {
  /**
   * Creates an instance of simple CoinMarketCap client.
   * @param {string} apiUrl - Coinmarketcap API url
   * @param {string} apiKey - Coinmarketcap API key
   */
  constructor(apiUrl, apiKey) {
    this.validateParams(apiUrl, apiKey);

    this.config = {
      baseURL: apiUrl,
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
    };
  }

  /**
   * Make a request to Coinmarketcap API
   * @param {*} [config={}]
   * @returns {Promise}
   */
  call = (config = {}) => axios({ ...this.config, ...config });

  /**
   * Get latest market quotes for all available userCurrencies
   * @returns {Promise}
   */
  getMarketQuotes = () => {
    const config = {
      url: '/cryptocurrency/quotes/latest',
      params: {
        id: Object.keys(currencies).join(','),
        convert: 'USD',
      },
    };

    return this.call(config);
  };

  /**
   * List all cryptocurrencies
   * @returns {Promise}
   */
  getCurrencies = () => {
    const config = {
      url: '/cryptocurrency/listings/latest',
      params: {
        convert: 'USD',
        limit: 500,
        sort: 'market_cap',
        sort_dir: 'desc',
      },
    };

    return this.call(config);
  };

  /**
   * Validate constructor params. Raise if required params are missing.
   * @param {string} apiUrl - Coinmarketcap API url
   * @param {string} apiKey - Coinmarketcap API key
   */
  validateParams(apiUrl, apiKey) {
    if (isNil(apiUrl)) {
      throw new Error('Missing API url');
    }

    if (isNil(apiKey)) {
      throw new Error('Missing API key');
    }
  }
}

export default CoinMarketCap;
