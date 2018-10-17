import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { currenciesActions } from 'state/currencies';

import Currencies from './Currencies';

const mapStateToProps = createStructuredSelector({});

const actions = {
  ...currenciesActions,
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation')
)(Currencies);
