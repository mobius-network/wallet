import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import HackathonVote from './HackathonVote';

const mapStateToProps = createStructuredSelector({});

export default compose(
  connect(mapStateToProps),
  translate('translation')
)(HackathonVote);
