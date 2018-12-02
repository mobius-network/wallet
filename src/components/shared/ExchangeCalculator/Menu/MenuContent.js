import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import {
  Container,
  Content,
  HorizontalList,
  Search,
  Text,
  Token,
  TokenIcon,
  View,
} from './styles';

class Menu extends Component {
  static propTypes = {
    children: PropTypes.object,
    getCurrencyIconUri: PropTypes.func,
    getSearchQuery: PropTypes.string,
    menu: PropTypes.bool,
    searchResults: PropTypes.array,
    setSearchQuery: PropTypes.func,
    updateToken: PropTypes.func,
  };

  styles = StyleSheet.create({
    contentContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  tokenSelection = (token) => {
    this.props.updateToken(token);
  };

  onChange = (typedCoinName) => {
    this.props.setSearchQuery(typedCoinName);
  };

  renderList = searchResults => searchResults.map(({ id, symbol }) => (
      <Text key={uuid()} onPress={() => this.tokenSelection({ id, symbol })}>
        <TokenIcon
          alt="Token"
          source={{ uri: this.props.getCurrencyIconUri(id) }}
        />
      </Text>
  ));

  render() {
    const {
      styles: { contentContainer },
      onChange,
      renderList,
    } = this;
    const {
      children, getSearchQuery, menu, searchResults,
    } = this.props;
    return (
      <View>
        <Token>{children}</Token>
        {menu && (
          <Container>
            <Content>
              <Search
                autoFocus={true}
                onChangeText={onChange}
                placeholder="Search Token"
                value={getSearchQuery}
              />
              <HorizontalList contentContainerStyle={contentContainer}>
                {renderList(searchResults)}
              </HorizontalList>
            </Content>
          </Container>
        )}
      </View>
    );
  }
}

export default Menu;
