import styled from 'styled-components';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  colors,
  fonts,
  fontSizes,
  helpers,
} from 'components/shared/Styleguide';

export const Container = styled.View`
  background: ${colors.bgWhite};
  border-radius: 8;
  margin-bottom: 16;
  padding-bottom: 25;
  padding-left: 30;
  padding-right: 30;
  padding-top: 25;
`;

export const Text = styled.Text`
  color: ${colors.textDefault};
  font-family: ${fonts.helveticaNeue.mediumItalic};
  font-size: ${fontSizes.default};
  line-height: ${helpers.calculateLineHeight(fontSizes.default, 2)};
  text-align: center;
`;

export const CopyButton = styled.View`
  position: absolute;
  right: 10;
  bottom: 10;
`;

export const CopyIcon = styled(Icon).attrs({
  name: 'content-copy',
})`
  color: ${colors.textPrimary};
  font-size: 22;
`;

export const shadow = {
  shadowOpacity: 0.1,
  shadowRadius: 10,
  shadowColor: '#000000',
  shadowOffset: { height: 4, width: 0 },
};
