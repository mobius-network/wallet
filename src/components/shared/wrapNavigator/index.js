export const routeKeys = navigator =>
  Object.keys(navigator.router.childRouters).reduce((acc, key) => {
    acc[key] = key;
    return acc;
  }, {});

export { default } from './NavigatorContainer';
