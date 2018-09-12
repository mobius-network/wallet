import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BackgroundView from 'components/shared/BackgroundView';
import SimpleInfo from 'components/shared/SimpleInfo';
import Button from 'components/shared/Button';

class Success extends Component {
  static propTypes = {
    message: PropTypes.string,

    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
  };

  onComplete = () => this.props.navigation.navigate('Dashboard');

  render() {
    const { t, message } = this.props;

    return (
      <BackgroundView
        action={
          <Button
            onPress={this.onComplete}
            title={t('shared.done')}
            variant="primary"
          />
        }
        content={
          <SimpleInfo description={message} title={t('success.title')} />
        }
        variant="center"
      />
    );
  }
}

export default Success;
