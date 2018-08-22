import { Dimensions } from 'react-native';

export const centerContentFlex = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const vw = Dimensions.get('window').width;

export const vh = Dimensions.get('window').height;

export const calculateLineHeight = (fontSize, multiplyer = 1.6) =>
  fontSize * multiplyer;
