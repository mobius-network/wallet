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

  handleNavigationClick = to => () => this.props.navigation.navigate(to);

  render() {
    const { t } = this.props;

    return (
      <NoticeView
        description={t('welcome.description')}
        title={t('welcome.title')}
      >
        <Button
          onPress={this.handleNavigationClick('PinSetup')}
          title={t('welcome.setupWalletButton')}
        />
      </NoticeView>
    );
  }
}

export default Welcome;
