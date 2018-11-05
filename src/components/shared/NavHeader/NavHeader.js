import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import {
  Gradient, Title, BackButton, BackIcon,
} from './styles';

class NavHeader extends Component {
  static propTypes = {
    children: PropTypes.func,
    navigation: PropTypes.shape({
      pop: PropTypes.func.isRequired,
    }),
    t: PropTypes.func.isRequired,
    title: PropTypes.string,
  };

  goBack = () => this.props.navigation.pop();

  render() {
    const { t, title, children } = this.props;

    if (children) {
      return <Gradient>{children}</Gradient>;
    }

    return (
      <Gradient>
        <BackButton
          onPress={this.goBack}
          testID="BACK_BUTTON"
          underlayColor="transparent"
        >
          <BackIcon />
        </BackButton>
        <Title>{t(title)}</Title>
      </Gradient>
    );
  }
}

export default translate('translation')(NavHeader);
