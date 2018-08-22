import styled from 'styled-components';

import {
  colors,
  fonts,
  fontSizes,
  helpers,
} from 'components/shared/Styleguide';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'stretch',
    paddingBottom: 16,
    paddingTop: 44,
    backgroundColor: colors.bgLight,
    flexDirection: 'column',
    paddingLeft: 24,
    paddingRight: 24,
  },
})``;

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
