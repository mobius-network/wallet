import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ActionButton, ButtonRow } from './styles';

class BottomButtons extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
  };

  openReceiveScreen = () => this.props.navigation.navigate('AddFunds');

  openSendScreen = () => this.props.navigation.navigate('AmountForm');

  render() {
    const { t } = this.props;

    return (
      <ButtonRow>
        <ActionButton
          onPress={this.openReceiveScreen}
          square
          title={t('dashboard.receiveButton').toUpperCase()}
        />
        <ActionButton
          onPress={this.openSendScreen}
          square
          title={t('dashboard.sendButton').toUpperCase()}
        />
      </ButtonRow>
    );
  }
}

export default BottomButtons;
