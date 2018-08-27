import styled from 'styled-components';

import {
  colors,
  fonts,
  fontSizes,
  helpers,
} from 'components/shared/Styleguide';

export const ImageBackgroundView = styled.ImageBackground`
  align-items: center;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
`;

export const LoadingIconView = styled.View`
  align-items: center;
  flex-direction: row;
  flex: 1;
  justify-content: center;
`;

export const LoadingIcon = styled.ActivityIndicator.attrs({
  color: colors.textPrimary,
  size: 'large',
})``;

export const ContentView = styled.View`
  align-items: stretch;
  flex-direction: column;
  padding-left: 24;
  padding-right: 24;
  padding-bottom: 16;
`;

export const Title = styled.Text`
  color: ${colors.textDefault};
  font-family: ${fonts.helveticaNeue.bold};
  font-size: ${fontSizes.title};
  font-weight: bold;
  margin-bottom: 10;
  text-align: center;
`;

export const Description = styled.Text`
  color: ${colors.textSecondary};
  font-family: ${fonts.helveticaNeue.regular};
  font-size: ${fontSizes.default};
  line-height: ${helpers.calculateLineHeight(fontSizes.default)};
  margin-bottom: 50;
  text-align: center;
`;
