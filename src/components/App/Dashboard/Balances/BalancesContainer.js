import { connect } from 'react-redux';

import { authActions } from 'state/auth';

import Balances from './Balances';

const mapStateToProps = () => ({
  balances: [
    {
      asset: 'mobi',
      usdPrice: 0.035386,
      usdAmount: 0,
      amount: 0,
    },
    {
      asset: 'xlm',
      usdPrice: 0.179123,
      usdAmount: 0,
      amount: 0,
    },
  ],
});

const actions = {
  ...authActions,
};

export default connect(
  mapStateToProps,
  actions
)(Balances);
