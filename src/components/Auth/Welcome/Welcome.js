import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BackgroundView from 'components/shared/BackgroundView';
import SimpleInfo from 'components/shared/SimpleInfo';
import Button from 'components/shared/Button';

class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
  };

  handleNavigationClick = () => this.props.navigation.navigate('PinSetup');

  render() {
    const { t } = this.props;

    return (
      <BackgroundView
        action={
          <Button
            onPress={this.handleNavigationClick}
            title={t('welcome.setupWalletButton')}
          />
        }
        content={
          <SimpleInfo
            description={t('welcome.description')}
            title={t('welcome.title')}
          />
        }
        variant="bottom"
      />
    );
  }
}

export default Welcome;
