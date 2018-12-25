import axios from 'axios';

class PopularCoinAPI {
  constructor() {
    this.config = {
      baseURL: 'https://min-api.cryptocompare.com/data/',
      mediaURL: 'https://www.cryptocompare.com/',
    };
  }

  call = (config = {}) => axios({ ...this.config, ...config });

  getPopularData = (limit) => {
    const config = {
      method: 'GET',
      url: `top/totalvolfull?limit=${limit}&tsym=USD`,
    };

    return this.call(config);
  };
}

export default PopularCoinAPI;
