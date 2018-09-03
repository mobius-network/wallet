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
        variant="bottom"
        content={
          <SimpleInfo
            title={t('ready.title')}
            description={t('ready.description')}
          />
        }
        action={
          <Button
            onPress={this.handleNavigationClick}
            title={t('shared.continue')}
          />
        }
      />
    );
  }
}

export default Ready;
