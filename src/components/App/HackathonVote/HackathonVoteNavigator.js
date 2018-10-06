import React from 'react';
import { createStackNavigator } from 'react-navigation';

import wrapNavigator, { routeKeys } from 'components/shared/wrapNavigator';

import Loading from 'components/shared/LoadingView';
import Notice from 'components/shared/Notice';
import NavHeader from 'components/shared/NavHeader';

import HackathonVote from './HackathonVoteContainer';

export const HackathonVoteNavigator = createStackNavigator(
  {
    HackathonVote: {
      screen: HackathonVote,
      navigationOptions: () => ({
        /* eslint-disable-next-line react/display-name */
        header: props => <NavHeader {...props} title="hackathonVote.title" />,
      }),
    },
    Loading,
    Notice: {
      screen: Notice,
      navigationOptions: () => ({
        gesturesEnabled: false,
      }),
    },
  },
  {
    headerMode: 'screen',
    initialRouteName: 'HackathonVote',
    navigationOptions: () => ({
      header: null,
    }),
  }
);

export const authRoutes = routeKeys(HackathonVoteNavigator);

export default wrapNavigator('HackathonVote')(HackathonVoteNavigator);
