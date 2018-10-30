import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import Chart from './Chart';

const mapStateToProps = state => ({ history: state.history });

export default compose(
  connect(mapStateToProps),
  translate('translation')
)(Chart);
