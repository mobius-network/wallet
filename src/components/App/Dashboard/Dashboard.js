import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { SimpleCard } from '@mobius-network/components';

// import { Container, Title } from './styles';

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
});

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SimpleCard color="green" title="Card">
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </SimpleCard>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default Dashboard;
