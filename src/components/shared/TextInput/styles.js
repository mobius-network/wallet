import styled from 'styled-components';

import { colors, fontSizes, fonts } from 'components/shared/Styleguide';

export const Container = styled.View`
  border-bottom-width: 1;
  border-color: ${colors.border};
  padding-bottom: 20;
  padding-left: 16;
  padding-right: 58;
  padding-top: 20;
`;

export const Label = styled.Text`
  color: ${colors.textPrimary};
  font-family: ${fonts.roboto.regular};
  font-size: ${fontSizes.small};
  margin-bottom: 5;
`;

export const Input = styled.TextInput`
  color: ${({ theme }) => (theme.error ? colors.error : colors.textDefault)};
  font-family: ${fonts.roboto.regular};
  font-size: ${fontSizes.default};
`;
