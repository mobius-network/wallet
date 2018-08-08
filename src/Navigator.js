import { createSwitchNavigator } from 'react-navigation';

import Splash from 'components/Splash';
import AuthStack from 'components/Auth';
import AppStack from 'components/App';

export default createSwitchNavigator(
  {
    Splash,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  }
);
