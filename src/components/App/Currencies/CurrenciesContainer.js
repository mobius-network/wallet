import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { userCurrenciesActions } from 'state/userCurrencies';
import Currencies from './Currencies';

const actions = {
  ...userCurrenciesActions,
};

export default compose(
  connect(
    null,
    actions
  ),
  translate('translation')
)(Currencies);
