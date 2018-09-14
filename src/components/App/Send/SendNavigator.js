import { createStackNavigator } from 'react-navigation';

import wrapNavigator, { routeKeys } from 'components/shared/wrapNavigator';

import AddressForm from './AddressForm';
import AmountForm from './AmountForm';

export const SendNavigator = createStackNavigator(
  {
    AddressForm,
    AmountForm,
  },
  {
    headerMode: 'screen',
    initialRouteName: 'AmountForm',
    navigationOptions: () => ({
      header: null,
    }),
  }
);

export const authRoutes = routeKeys(SendNavigator);

export default wrapNavigator('Send')(SendNavigator);
