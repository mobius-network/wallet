import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NoticeView from 'components/shared/NoticeView';
import Button from 'components/shared/Button';

class Success extends Component {
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
      <NoticeView
        description={t('success.description')}
        title={t('success.title')}
      >
        <Button
          onPress={this.handleNavigationClick}
          title={t('shared.continue')}
        />
      </NoticeView>
    );
  }
}

export default Success;
