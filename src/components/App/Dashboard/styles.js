import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import {
  vw, fonts, colors, centerContentFlex,
} from 'styles';

export const Container = styled.View``;

export const Gradient = styled(LinearGradient).attrs({
  start: { x: 0.0, y: 0.9 },
  end: { x: 1, y: 1.0 },
  locations: [0, 1],
  colors: ['#37BDE6', '#2D76FD'],
})`
  display: flex;
  height: 163;
  width: ${vw};
  ${centerContentFlex};
`;

export const Title = styled.Text`
  margin-bottom: 16;
  font-size: 14;
  font-family: ${fonts.helveticaNeue.bold};
  color: ${colors.darkBlue};
`;

export const BalanceContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const CurrencySymbol = styled.Text`
  margin-right: 2;
  font-size: 28;
  font-family: ${fonts.roboto.regular};
  color: white;
`;

export const BalanceAmount = styled.Text`
  font-size: 54;
  line-height: 54;
  font-family: ${fonts.roboto.regular};
  color: white;
`;
