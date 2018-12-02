import axios from 'axios';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { currenciesActions } from 'state/currencies';
import { getCurrencyIconUri } from 'utils/currency-icon-uri';
import ExchangeCalculatorContent from './ExchangeCalculatorContent';

const getExchangeRate = async (amount, buy, sell) => {
  const url = 'https://daimyo.ml/model';
  const result = await axios
    .post(url, {
      query: {
        buy,
        sell,
      },
    })
    .then(response => response.data * amount);
  return result && !Number.isNaN(result.toFixed(7))
    ? result.toFixed(7)
    : 'No Data';
};

const actions = {
  ...currenciesActions,
};

const mapStateToProps = () => ({
  getCurrencyIconUri,
  getExchangeRate,
});

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation')
)(ExchangeCalculatorContent);
