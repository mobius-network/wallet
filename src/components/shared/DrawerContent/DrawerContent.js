import React, { Component } from 'react';
import { ScrollView, Linking, Clipboard } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';
import VersionNumber from 'react-native-version-number';

import Drawer from 'utils/drawer';

import {
  Container, Buttons, Link, DisabledLink, Version,
} from './styles';

class DrawerContent extends Component {
  static propTypes = {
    codePushLabel: PropTypes.string,
    navigation: PropTypes.shape({
      closeDrawer: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    secretKey: PropTypes.string,
    t: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    Drawer.subscribe(this.subscribeToDrawerEvents);
  }

  state = {
    isSecretKeyCopied: false,
  };

  subscribeToDrawerEvents = (event) => {
    if (event === 'DRAWER_CLOSED') {
      this.setState({ isSecretCopied: false });

      if (this.route) {
        this.navigateAfterDrawerClosed(this.route);
        this.route = null;
      }
    }
  };

  navigateAfterDrawerClosed = (route) => {
    setTimeout(() => this.props.navigation.navigate(route), 0);
  };

  handleLinkPress = route => () => {
    this.route = route;
    this.props.navigation.closeDrawer();
  };

  handleCopySecretKey = () => {
    Clipboard.setString(this.props.secretKey);
    this.setState({ isSecretCopied: true });
  };

  handleSupportPress = () => {
    const version = this.props.t('sidebarNavigation.version', {
      appVersion: VersionNumber.appVersion,
      buildVersion: VersionNumber.buildVersion,
    });

    Linking.openURL(`mailto:support@mobius.network?body=\n\n\n${version}`);
  };

  render() {
    const { isSecretCopied } = this.state;
    const { t, codePushLabel } = this.props;

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
              {/* <Link onPress={this.handleLinkPress('Payments')}>
                {t('sidebarNavigation.payments')}
              </Link> */}
              <Link onPress={this.handleSupportPress}>
                {t('sidebarNavigation.support')}
              </Link>
            </Buttons>

            <Buttons>
              {!isSecretCopied && (
                <Link onPress={this.handleCopySecretKey}>
                  {t('sidebarNavigation.copySecretKey')}
                </Link>
              )}
              {isSecretCopied && (
                <DisabledLink>
                  {t('sidebarNavigation.secretKeyCopied')}
                </DisabledLink>
              )}
            </Buttons>

            <Version>
              {t('sidebarNavigation.version', {
                appVersion: VersionNumber.appVersion,
                codePushVersion: codePushLabel,
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
