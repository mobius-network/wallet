import { createStackNavigator } from 'react-navigation';

import wrapNavigator, { routeKeys } from 'components/shared/wrapNavigator';

import Welcome from './Welcome';
import PinSetup from './PinSetup';
import Mnemonic from './Mnemonic';

export const AuthNavigator = createStackNavigator(
  {
    Welcome,
    PinSetup,
    Mnemonic,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Welcome',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export const authRoutes = routeKeys(AuthNavigator);

export default wrapNavigator('Auth')(AuthNavigator);
