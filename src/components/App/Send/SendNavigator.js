import { createStackNavigator } from 'react-navigation';

import wrapNavigator, { routeKeys } from 'components/shared/wrapNavigator';

import Loading from 'components/shared/LoadingView';
import Notice from 'components/shared/Notice';
import AddressForm from './AddressForm';
import AmountForm from './AmountForm';

export const SendNavigator = createStackNavigator(
  {
    AddressForm,
    AmountForm,
    Loading,
    Notice: {
      screen: Notice,
      navigationOptions: () => ({
        gesturesEnabled: false,
      }),
    },
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
