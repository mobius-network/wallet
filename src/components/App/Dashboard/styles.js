import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import { colors, fonts, helpers } from 'components/shared/Styleguide';

export const Container = styled.View``;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#37BDE6', '#2D76FD'],
  end: { x: 1, y: 1.0 },
  locations: [0, 1],
  start: { x: 0.0, y: 0.9 },
})`
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
