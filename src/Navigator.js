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
    initialRouteName: 'Auth',
  }
);

export default wrapNavigator('Main')(MainNavigator);
