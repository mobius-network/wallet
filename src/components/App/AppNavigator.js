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

import HackathonVoteStack from './HackathonVote';
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
      Payments: {
        screen: Payments,
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
    AddFunds: {
      screen: AddFunds,
      navigationOptions: () => ({
        /* eslint-disable-next-line react/display-name */
        header: props => <NavHeader {...props} title="addFunds.headerTitle" />,
      }),
    },
    DrawerNavigator,
    HackathonVote: HackathonVoteStack,
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
