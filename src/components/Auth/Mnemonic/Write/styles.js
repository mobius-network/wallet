import styled from 'styled-components';

import {
  colors,
  fonts,
  fontSizes,
  helpers,
} from 'components/shared/Styleguide';

export const Container = styled.View`
  align-items: stretch;
  background: ${colors.bgLight};
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  padding-bottom: 16;
  padding-left: 24;
  padding-right: 24;
  padding-top: 44;
`;

export const Header = styled.View`
  align-items: stretch;
  flex-direction: column;
  margin-bottom: 32;
`;

export const Title = styled.Text`
  color: ${colors.textDefault};
  font-family: ${fonts.helveticaNeue.bold};
  font-size: ${fontSizes.secondaryTitle};
  font-weight: bold;
  margin-bottom: 10;
  text-align: center;
`;

export const Description = styled.Text`
  color: ${colors.textSecondary};
  font-family: ${fonts.helveticaNeue.regular};
  font-size: ${fontSizes.default};
  line-height: ${helpers.calculateLineHeight(fontSizes.default)};
  text-align: center;
`;

export const ContentContainer = styled.View`
  flex: 1;
`;
