import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import wrapNavigator, {
  routeKeys,
  notifyDrawer,
} from 'components/shared/wrapNavigator';

import DrawerContent from 'components/shared/DrawerContent';
import NavHeader from 'components/shared/NavHeader';

import AddFunds from './AddFunds';
import Dashboard from './Dashboard';
import Payments from './Payments';
import Currencies from './Currencies';

import SendStack from './Send';

export const DrawerNavigator = notifyDrawer(
  createDrawerNavigator(
    {
      Dashboard: {
        screen: Dashboard,
        navigationOptions: () => ({
          header: null,
        }),
      },
    },
    {
      initialRouteName: 'Dashboard',
      contentComponent: DrawerContent,
    }
  )
);

Dashboard.navigationOptions = ({ navigation }) => {
  let drawerLockMode = 'unlocked';
  if (navigation.getParam('lock') === true) {
    drawerLockMode = 'locked-open';
  }
  return {
    drawerLockMode,
  };
};

export const StackNavigator = createStackNavigator(
  {
    AddFunds: {
      screen: AddFunds,
      navigationOptions: () => ({
        /* eslint-disable-next-line react/display-name */
        header: props => <NavHeader {...props} title="addFunds.headerTitle" />,
      }),
    },
    Payments: {
      screen: Payments,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Currencies: {
      screen: Currencies,
    },
    DrawerNavigator,
    Send: SendStack,
  },
  {
    headerMode: 'screen',
    initialRouteName: 'DrawerNavigator',
    navigationOptions: () => ({
      header: null,
    }),
  }
);

export const appRoutes = routeKeys(StackNavigator);

export default wrapNavigator('App')(StackNavigator);
