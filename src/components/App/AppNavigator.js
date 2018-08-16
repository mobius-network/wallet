import { createStackNavigator } from 'react-navigation';

import wrapNavigator, { routeKeys } from 'components/shared/wrapNavigator';

import Dashboard from './Dashboard';

export const AppNavigator = createStackNavigator({
  Dashboard,
});

export const appRoutes = routeKeys(AppNavigator);

export default wrapNavigator('App')(AppNavigator);
