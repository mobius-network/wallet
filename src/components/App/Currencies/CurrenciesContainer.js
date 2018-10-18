import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import Currencies from './Currencies';
import { userCurrenciesActions } from '../../../state/userCurrencies';

const mapStateToProps = createStructuredSelector({});

const actions = {
  ...userCurrenciesActions,
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation')
)(Currencies);
