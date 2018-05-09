// @flow

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { API_HOST } from 'react-native-dotenv';
import { SimpleCard } from '@mobius-network/components';

type Props = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SimpleCard color="green" title="Card">
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </SimpleCard>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>text</Text>
      </View>
    );
  }
}
