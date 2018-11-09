import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BackgroundView from 'components/shared/BackgroundView';
import SimpleInfo from 'components/shared/SimpleInfo';
import Button from 'components/shared/Button';

class Ready extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
  };

  handleNavigationClick = () => this.props.navigation.navigate('App');

  render() {
    const { t } = this.props;

    return (
      <BackgroundView
        action={
          <Button
            onPress={this.handleNavigationClick}
            testID="READY_CONFIRM_BUTTON"
            title={t('shared.continue')}
          />
        }
        content={
          <SimpleInfo
            description={t('ready.description')}
            title={t('ready.title')}
          />
        }
        testID="READY_VIEW"
        variant="bottom"
      />
    );
  }
}

export default Ready;
