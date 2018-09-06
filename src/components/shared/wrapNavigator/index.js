import Drawer from 'utils/drawer';

export const routeKeys = navigator => Object.keys(navigator.router.childRouters).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

// TODO: Remove this after
// https://github.com/react-navigation/react-navigation/issues/4945 will be fixed
export const notifyDrawer = (navigator) => {
  const defaultGetStateForAction = navigator.router.getStateForAction;

  // eslint-disable-next-line no-param-reassign
  navigator.router.getStateForAction = (action, state) => {
    if (action.type === 'Navigation/DRAWER_CLOSED') {
      Drawer.notify('DRAWER_CLOSED');
    }

    return defaultGetStateForAction(action, state);
  };

  return navigator;
};

export { default } from './NavigatorContainer';
