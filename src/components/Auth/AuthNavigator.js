import { createStackNavigator } from 'react-navigation';

import wrapNavigator, { routeKeys } from 'components/shared/wrapNavigator';

import Loading from './Loading';
import Mnemonic from './Mnemonic';
import PinSetup from './PinSetup';
import Ready from './Ready';
import Recovery from './Recovery';
import Splash from './Splash';
import Welcome from './Welcome';

export const AuthNavigator = createStackNavigator(
  {
    Loading,
    Mnemonic,
    PinSetup,
    Ready,
    Recovery,
    Splash,
    Welcome,
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
