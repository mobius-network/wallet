export const routeKeys = (navigator) => {
  const keys = Object.keys(navigator.router.childRouters).reduce((acc, key) => {
    acc[key] = key;
    return acc;
  }, {});

  return keys;
};

export { default } from './NavigatorContainer';
