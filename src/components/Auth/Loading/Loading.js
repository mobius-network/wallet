import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoadingView from 'components/shared/LoadingView';

class Loading extends Component {
  static propTypes = {
    signupFinish: PropTypes.func.isRequired,
  };

  render() {
    const { signupFinish } = this.props;

    return <LoadingView onError={signupFinish} />;
  }
}

export default Loading;
