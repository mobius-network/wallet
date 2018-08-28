import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NoticeView from 'components/shared/NoticeView';
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
      <NoticeView
        description={t('welcome.description')}
        title={t('welcome.title')}
      >
        <Button
          onPress={this.handleNavigationClick}
          title={t('welcome.setupWalletButton')}
          testID="setupWalletButton"
        />
      </NoticeView>
    );
  }
}

export default Welcome;
