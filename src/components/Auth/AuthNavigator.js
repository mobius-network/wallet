import { createStackNavigator } from 'react-navigation';

import wrapNavigator, { routeKeys } from 'components/shared/wrapNavigator';

import Welcome from './Welcome';
import PinSetup from './PinSetup';

export const AuthNavigator = createStackNavigator(
  {
    Welcome,
    PinSetup,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Welcome',
  }
);

export const authRoutes = routeKeys(AuthNavigator);

export default wrapNavigator('Auth')(AuthNavigator);
