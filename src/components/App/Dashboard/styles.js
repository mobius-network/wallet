import styled from 'styled-components';

import Button from 'components/shared/Button';

import {
  colors,
  fonts,
  helpers,
  HeaderGradient,
} from 'components/shared/Styleguide';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bgLight};
`;

export const Gradient = styled(HeaderGradient)`
  ${helpers.centerContentFlex};
  display: flex;
  height: 163;
  width: ${helpers.vw};
`;

export const Title = styled.Text`
  color: ${colors.darkBlue};
  font-family: ${fonts.helveticaNeue.bold};
  font-size: 14;
  margin-bottom: 16;
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

export const BalanceAmount = styled.Text`
  color: ${colors.textWhite};
  font-family: ${fonts.roboto.regular};
  font-size: 54;
  line-height: 54;
`;

export const ActionButton = styled(Button).attrs({
  square: true,
})``;
