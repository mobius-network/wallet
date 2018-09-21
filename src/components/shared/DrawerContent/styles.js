import styled from 'styled-components';

import {
  colors,
  fonts,
  fontSizes,
  helpers,
} from 'components/shared/Styleguide';

export const Container = styled.View`
  flex: 1;
  padding-top: 34;
  padding-bottom: 34;
  padding-left: 50;
`;

export const Buttons = styled.View`
  flex: 1;
`;

const Item = styled.Text`
  font-family: ${fonts.roboto.bold};
  font-size: ${fontSizes.normal};
  font-weight: bold;
  line-height: ${helpers.calculateLineHeight(fontSizes.normal)};
  margin-bottom: 24;
`;

export const Link = styled(Item)`
  color: ${colors.textPrimary};
`;

export const SignOut = styled(Item)`
  color: ${colors.textSecondary};
`;

export const Version = styled.Text`
  font-size: ${fontSizes.small};
  line-height: ${helpers.calculateLineHeight(fontSizes.small)};
  color: ${colors.textLight};
  margin-top: 24px;
`;
