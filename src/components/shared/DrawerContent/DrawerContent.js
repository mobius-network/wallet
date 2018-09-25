import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';
import VersionNumber from 'react-native-version-number';

import Drawer from 'utils/drawer';

import {
  Container, Buttons, Link, Version,
} from './styles';

class DrawerContent extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      closeDrawer: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
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

  handleLinkPress = route => () => {
    this.route = route;
    this.props.navigation.closeDrawer();
  };

  render() {
    const { t } = this.props;

    return (
      <ScrollView>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <Container>
            <Buttons>
              <Link onPress={this.handleLinkPress('AddFunds')}>
                {t('sidebarNavigation.addFunds')}
              </Link>
              <Link onPress={this.handleLinkPress('AmountForm')}>
                {t('sidebarNavigation.withdrawFunds')}
              </Link>
            </Buttons>

            <Version>
              {t('sidebarNavigation.version', {
                appVersion: VersionNumber.appVersion,
                buildVersion: VersionNumber.buildVersion,
              })}
            </Version>
          </Container>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default DrawerContent;
