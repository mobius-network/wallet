import { NavigationActions } from 'react-navigation';

export const navigators = {
  Main: undefined,
  Auth: undefined,
  App: undefined,
};

function setNavigator(navigatorType, ref) {
  navigators[navigatorType] = ref;
}

function navigate(navigatorType, routeName, params = {}, key) {
  const navigator = navigators[navigatorType];

  if (!navigator) {
    return;
  }

  const payload = {
    key,
    params,
    routeName,
    type: NavigationActions.NAVIGATE,
  };

  navigator.dispatch(NavigationActions.navigate(payload));
}

function goBack(navigatorType) {
  const navigator = navigators[navigatorType];

  if (!navigator) {
    return;
  }

  navigator.dispatch(NavigationActions.back());
}

export default {
  goBack,
  navigate,
  setNavigator,
};
