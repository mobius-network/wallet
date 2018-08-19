import { createSwitchNavigator } from 'react-navigation';

import wrapNavigator from 'components/shared/wrapNavigator';

import Splash from 'components/Splash';
import AuthStack from 'components/Auth';
import AppStack from 'components/App';

const MainNavigator = createSwitchNavigator(
  {
    Splash,
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
