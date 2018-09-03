import { createStackNavigator } from 'react-navigation';

import wrapNavigator, { routeKeys } from 'components/shared/wrapNavigator';

import Splash from './Splash';
import Welcome from './Welcome';
import PinSetup from './PinSetup';
import Mnemonic from './Mnemonic';
import Ready from './Ready';
import Loading from './Loading';

export const AuthNavigator = createStackNavigator(
  {
    Splash,
    Welcome,
    PinSetup,
    Mnemonic,
    Ready,
    Loading,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Splash',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export const authRoutes = routeKeys(AuthNavigator);

export default wrapNavigator('Auth')(AuthNavigator);
