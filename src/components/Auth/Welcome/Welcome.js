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
    signupStart: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  handleNavigationClick = (route, params) => () => this.props.navigation.navigate(route, params);

  render() {
    const { t, signupStart } = this.props;

    return (
      <BackgroundView
        action={
          <Button
            onPress={this.handleNavigationClick('PinSetup', {
              action: ({ dispatch }) => dispatch(signupStart()),
            })}
            title={t('welcome.setupWalletButton')}
          />
        }
        content={
          <SimpleInfo
            description={t('welcome.description')}
            title={t('welcome.title')}
          />
        }
        secondaryAction={
          <Button
            onPress={this.handleNavigationClick('Recovery')}
            title={t('welcome.recoverWalletButton')}
            variant="text"
          />
        }
        variant="bottom"
      />
    );
  }
}

export default Welcome;
