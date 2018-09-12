import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import {
  Gradient, Title, BackButton, BackIcon,
} from './styles';

class NavHeader extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      pop: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  };

  goBack = () => this.props.navigation.pop();

  render() {
    const { t, title } = this.props;

    return (
      <Gradient>
        <BackButton onPress={this.goBack} underlayColor="transparent">
          <BackIcon />
        </BackButton>
        <Title>{t(title)}</Title>
      </Gradient>
    );
  }
}

export default translate('translation')(NavHeader);
