import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NoticeView from 'components/shared/NoticeView';
import Button from 'components/shared/Button';

class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleNavigationClick = to => () => this.props.navigation.navigate(to);

  render() {
    return (
      <NoticeView
        title="Welcome"
        description="Create a wallet to send and receive money with friends using cryptocurrency."
      >
        <Button
          title="Setup wallet"
          onPress={this.handleNavigationClick('PinSetup')}
        />
        <Button
          title="Recover Existing Account"
          onPress={() => {}}
          variant="text"
        />
      </NoticeView>
    );
  }
}

export default Welcome;
