import { createStackNavigator } from 'react-navigation';

import wrapNavigator, { routeKeys } from 'components/shared/wrapNavigator';

import Loading from 'components/shared/LoadingView';
import AddressForm from './AddressForm';
import AmountForm from './AmountForm';
import Success from './Success';

export const SendNavigator = createStackNavigator(
  {
    AddressForm,
    AmountForm,
    Loading,
    Success,
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
