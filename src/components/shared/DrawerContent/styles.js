import styled from 'styled-components';

import { colors, fonts } from 'components/shared/Styleguide';

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
  font-family: ${fonts.nunitoSans.bold};
  font-weight: 400;
  font-size: 20;
  height: 50;
  line-height: 50;
`;

export const Link = styled(Item)`
  color: ${colors.textPrimary};
`;

export const SignOut = styled(Item)`
  color: ${colors.textSecondary};
`;
