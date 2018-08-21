import { createSwitchNavigator } from 'react-navigation';

import wrapNavigator from 'components/shared/wrapNavigator';

import AuthStack from 'components/Auth';
import AppStack from 'components/App';

const MainNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  },
  {
    // TODO: revert initial route to Auth
    initialRouteName: 'Auth',
    // initialRouteName: 'App',
  }
);

export default wrapNavigator('Main')(MainNavigator);
