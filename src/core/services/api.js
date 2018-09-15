import axios from 'axios';

class Api {
  constructor(apiUrl) {
    this.config = {
      baseURL: apiUrl,
    };
  }

  call = (config = {}) => axios({ ...this.config, ...config });

  fundWallet = (token) => {
    const config = {
      method: 'POST',
      url: `stellar/fund_wallet?payload=${token}`,
    };

    return this.call(config);
  };
}

export default Api;
