import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';

import Drawer from 'utils/drawer';

import { Container, Buttons, Link } from './styles';

class DrawerContent extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      closeDrawer: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    Drawer.subscribe(this.subscribeToDrawerEvents);
  }

  subscribeToDrawerEvents = (event) => {
    if (event === 'DRAWER_CLOSED' && this.route) {
      this.navigateAfterDrawerClosed(this.route);
      this.route = null;
    }
  };

  navigateAfterDrawerClosed = (route) => {
    setTimeout(() => this.props.navigation.navigate(route), 0);
  };

  handleOnPress = (route) => {
    this.route = route;
    this.props.navigation.closeDrawer();
  };

  handleAddFunds = () => this.handleOnPress('AddFunds');

  render() {
    return (
      <ScrollView>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <Container>
            <Buttons>
              <Link onPress={this.handleAddFunds}>Add Funds</Link>
            </Buttons>
            {/* <SignOut>Sign Out</SignOut> */}
          </Container>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default DrawerContent;
