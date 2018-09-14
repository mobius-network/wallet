const createPropSelector = (name, defaultValue) => (_, props) => {
  if (typeof props[name] === 'undefined') {
    return defaultValue;
  }

  return props[name];
};

export const getAsset = createPropSelector('asset', 'mobi');
export const getSellAsset = createPropSelector('sellAsset');
export const getBuyAsset = createPropSelector('buyAsset', 'usd');
export const getSellAmount = createPropSelector('sellAmount', 0);

export const getMobiAsset = () => 'mobi';
export const getNativeAsset = () => 'native';
export const getFixed = createPropSelector('fixed', 2);
