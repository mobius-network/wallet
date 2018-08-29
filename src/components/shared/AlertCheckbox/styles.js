import styled from 'styled-components';

import { colors, fonts, fontSizes } from 'components/shared/Styleguide';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Label = styled.Text`
  color: ${colors.textDefault};
  font-family: ${fonts.helveticaNeue.bold};
  font-size: ${fontSizes.normal};
  line-height: 22;
  font-weight: bold;
  margin-left: 10;
`;
