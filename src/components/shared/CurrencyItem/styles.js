import styled from 'styled-components';

import { colors, fonts, fontSizes } from 'components/shared/Styleguide';

import Icon from 'components/shared/Icon';

export const Container = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 16;
  margin-bottom: 16;
  margin-left: 16;
  margin-right: 16;
`;

export const IconLogotype = styled(Icon)`
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

export const ChangeInfo = styled.Text`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

export const Change = styled.Text`
  color: ${props => (props.positive ? colors.growth : colors.loss)};
  font-family: ${fonts.roboto.regular};
  font-size: ${fontSizes.small};
  line-height: 14;
`;

export const ChangeTime = styled.Text`
  color: ${colors.textLight};
  font-family: ${fonts.roboto.regular};
  font-size: ${fontSizes.small};
  line-height: 14;
`;

export const Image = styled.Image`
  width: ${props => props.size};
  height: ${props => props.size};
`;
