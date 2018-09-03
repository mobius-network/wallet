import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BackgroundView from 'components/shared/BackgroundView';
import SimpleInfo from 'components/shared/SimpleInfo';
import Button from 'components/shared/Button';

class Success extends Component {
  static propTypes = {
    message: PropTypes.string,

    t: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  onComplete = () => this.props.navigation.navigate('Dashboard');

  render() {
    const { t, message } = this.props;

    return (
      <BackgroundView
        variant="center"
        content={
          <SimpleInfo title={t('success.title')} description={message} />
        }
        action={
          <Button
            variant="primary"
            title={t('shared.done')}
            onPress={this.onComplete}
          />
        }
      />
    );
  }
}

export default Success;
