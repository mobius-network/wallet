/* eslint-disable */
/* Disabling eslint for inline style */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';

import { BackButton, BackIcon, Gradient, NavRow, TitleBar } from './styles';

class Header extends PureComponent {
  static propTypes = {
    onBackButtonClick: PropTypes.func.isRequired,
    onSearchTextChange: PropTypes.func,
    selectedIndex: PropTypes.number.isRequired,
    t: PropTypes.func.isRequired,
    text: PropTypes.string,
  };

  render() {
    const {
      onBackButtonClick,
      onSearchTextChange,
      selectedIndex,
      t,
      text,
    } = this.props;

    return (
      <View>
        <BackButton onPress={onBackButtonClick}>
          <BackIcon />
        </BackButton>
        <Gradient>
          <NavRow>
            <TitleBar style={selectedIndex < 1 ? { height: 36 } : null}>
              {selectedIndex < 1 ? (
                <TextInput
                  name="coin_name"
                  onChangeText={newText => onSearchTextChange(newText)}
                  placeholder={t('currencies.searchFieldPlaceholder')}
                  placeholderTextColor="rgba(255, 255, 255, 0.75)"
                  style={{ color: '#ffffff', fontSize: 17, paddingTop: 8 }}
                  value={text}
                />
              ) : null}
            </TitleBar>
          </NavRow>
        </Gradient>
      </View>
    );
  }
}

export default Header;
