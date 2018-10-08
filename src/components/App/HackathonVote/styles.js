import styled from 'styled-components';

import { colors, fonts, fontSizes } from 'components/shared/Styleguide';

export const Container = styled.View`
  background-color: ${colors.bgLight};
  flex-direction: column;
  flex: 1;

  padding-top: 16;
  padding-left: 16;
  padding-right: 16;
  padding-bottom: 16;
`;

export const Description = styled.Text`
  color: ${colors.textSecondary};
  font-family: ${fonts.helveticaNeue.bold};
  font-size: ${fontSizes.normal};
  line-height: 22;
  font-weight: bold;
`;

export const List = styled.View`
  flex: 1;
  margin-top: 8;
`;

export const CheckboxRow = styled.View`
  margin-top: 8;
  margin-bottom: 8;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Label = styled.Text`
  color: ${colors.textDefault};
  font-family: ${fonts.helveticaNeue.regular};
  font-size: ${fontSizes.normal};
  line-height: 22;
  margin-left: 10;
`;
