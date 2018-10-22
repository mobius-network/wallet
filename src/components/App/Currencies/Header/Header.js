import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import {
  BackButton, BackIcon, Gradient, NavRow,
} from './styles';

class Header extends PureComponent {
  static propTypes = {
    onBackButtonClick: PropTypes.func.isRequired,
    onSearchTextChange: PropTypes.func,
    t: PropTypes.func.isRequired,
    text: PropTypes.string,
  };

  render() {
    const {
      onBackButtonClick, t, onSearchTextChange, text,
    } = this.props;

    return (
      <Gradient>
        <NavRow>
          <BackButton onPress={onBackButtonClick}>
            <BackIcon />
          </BackButton>
          <TextInput
            label="Coin Name"
            name="coin_name"
            onChangeText={newText => onSearchTextChange(newText)}
            placeholder={t('currencies.searchFieldPlaceholder')}
            value={text}
          />
        </NavRow>
      </Gradient>
    );
  }
}

export default Header;
