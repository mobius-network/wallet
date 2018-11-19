import styled from 'styled-components';

import { colors, fonts, fontSizes } from 'components/shared/Styleguide';

import Icon from 'components/shared/Icon';
import Swipeout from 'react-native-swipeout';

export const Container = styled.View`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  margin-bottom: ${props => (props.isSmallMarginBottom ? 10 : 31)};
  margin-left: 16;
  margin-right: 16;
  min-height: 50;
`;

export const IconLogoType = styled(Icon)`
  margin-right: 16.5;
`;

export const Info = styled.View`
  margin-left: 10;
`;

export const Title = styled.Text`
  color: ${colors.textDefault};
  font-family: ${fonts.roboto.regular};
  font-size: ${fontSizes.default};
  line-height: 24;
`;

export const Description = styled.Text`
  color: ${colors.textLight};
  font-family: ${fonts.roboto.regular};
  font-size: ${fontSizes.small};
  line-height: 14;
`;

export const AmountInfo = styled.View`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

export const Price = styled.Text`
  color: ${colors.textDefault};
  font-family: ${fonts.roboto.bold};
  font-size: ${fontSizes.default};
  line-height: 24;
`;

export const Change = styled.Text`
  color: ${props => (props.positive ? colors.growth : colors.error)};
  font-family: ${fonts.roboto.regular};
  font-size: ${fontSizes.small};
  line-height: 14;
`;

export const Image = styled.Image`
  width: ${props => props.size};
  height: ${props => props.size};
`;

export const MainAmount = styled.Text`
  color: ${colors.textDefault};
  font-family: ${fonts.roboto.bold};
  font-size: ${fontSizes.default};
  line-height: 24;
`;

export const SecondaryAmount = styled.Text`
  color: ${colors.textLight};
  font-family: ${fonts.roboto.regular};
  font-size: ${fontSizes.small};
  line-height: 14;
`;

export const BalanceSwiper = styled(Swipeout).attrs({
  autoClose: true,
})`
  background-color: transparent;
`;

export const Trend = styled.View`
  display: flex;
  flex-direction: row;
`;

export const IconChangeType = styled.View`
  margin-left: 5;
  margin-right: 5;
`;
