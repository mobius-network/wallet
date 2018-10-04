import styled from 'styled-components';

import { colors, fonts, helpers } from 'components/shared/Styleguide';

export const Container = styled.View`
  ${helpers.centerContentFlex};
  display: flex;
`;

export const BalanceAmount = styled.Text`
  color: ${colors.textWhite};
  font-family: ${fonts.roboto.regular};
  font-size: 54;
  line-height: 54;
`;

export const BalanceContainer = styled.View`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CurrencySymbol = styled.Text`
  color: ${colors.textWhite};
  font-family: ${fonts.roboto.regular};
  font-size: 28;
  margin-right: 2;
`;

export const Title = styled.Text`
  color: ${colors.darkBlue};
  font-family: ${fonts.helveticaNeue.bold};
  font-size: 14;
  margin-bottom: 16;
`;
