import styled from 'styled-components';

import { fonts, colors } from 'styles';

import Icon from 'components/shared/Icon';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 16;
  margin-right: 16;
  margin-bottom: 31;
  align-items: center;
`;

export const CurrencyIcon = styled(Icon)`
  margin-right: 16.5;
`;

export const AssetInfo = styled.View``;

export const Asset = styled.Text`
  font-size: 16;
  font-family: ${fonts.roboto.regular};
  color: ${colors.darkGray};
  line-height: 24;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-size: 13;
  font-family: ${fonts.roboto.regular};
  color: ${colors.gray};
  line-height: 14;
`;

export const AmountInfo = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
`;

export const UsdAmount = styled.Text`
  font-size: 16;
  font-family: ${fonts.roboto.bold};
  color: ${colors.darkGray};
  line-height: 24;
`;

export const Amount = styled.Text`
  font-size: 13;
  font-family: ${fonts.roboto.regular};
  color: ${colors.gray};
  line-height: 14;
`;
