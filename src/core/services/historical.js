import axios from 'axios';

class HistoricalPriceAPI {
  constructor() {
    this.config = {
      baseURL: 'https://min-api.cryptocompare.com/data/',
    };
  }

  call = (config = {}) => axios({ ...this.config, ...config });

  getHistoricalData = (token) => {
    const config = {
      method: 'GET',
      url: `histoday?fsym=${token}&tsym=USD&limit=6`,
    };

    return this.call(config);
  };
}

export default HistoricalPriceAPI;
