import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import wrapNavigator, {
  routeKeys,
  notifyDrawer,
} from 'components/shared/wrapNavigator';

import DrawerContent from 'components/shared/DrawerContent';
import NavHeader from 'components/shared/NavHeader';

import Dashboard from './Dashboard';
import AddFunds from './AddFunds';
import Success from './Success';
import SendFunds from './SendFunds';
import AddressForm from './AddressForm';

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

export const StackNavigator = createStackNavigator(
  {
    DrawerNavigator: {
      screen: DrawerNavigator,
      navigationOptions: () => ({
        header: null,
      }),
    },
    AddFunds: {
      screen: AddFunds,
      navigationOptions: () => ({
        /* eslint-disable-next-line react/display-name */
        header: props => <NavHeader {...props} title="addFunds.headerTitle" />,
      }),
    },
    Success: {
      screen: Success,
      navigationOptions: () => ({
        header: null,
      }),
    },
    SendFunds: {
      screen: SendFunds,
      navigationOptions: () => ({
        /* eslint-disable-next-line react/display-name */
        header: props => <NavHeader {...props} title="sendFunds.headerTitle" />,
      }),
    },
    AddressForm: {
      screen: AddressForm,
      mode: 'modal',
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    headerMode: 'screen',
  }
);

export const appRoutes = routeKeys(StackNavigator);

export default wrapNavigator('App')(StackNavigator);
