import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {
  colors,
  fonts,
  fontSizes,
  helpers,
} from 'components/shared/Styleguide';

const titleStyles = {
  flex: 1,
  flexWrap: 'wrap',
  fontFamily: fonts.helveticaNeue.bold,
  fontSize: fontSizes.secondaryTitle,
  textAlign: 'center',
};

const subtitleStyles = {
  fontSize: fontSizes.default,
  lineHeight: helpers.calculateLineHeight(fontSizes.default),
  paddingTop: 10,
  position: 'absolute',
  textAlign: 'center',
  top: '100%',
  width: helpers.vw - 48,
};

const dotStyles = {
  borderRadius: 10,
  height: 20,
  marginLeft: 9,
  marginRight: 9,
  width: 20,
};

export default StyleSheet.create({
  container: {
    flex: 2,
  },
  content: {
    alignItems: 'center',
    flex: 2,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  textContainer: {
    alignItems: 'stretch',
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 24,
    marginRight: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    flexShrink: 0,
    width: helpers.vw - 48,
  },
  title: {
    ...titleStyles,
    color: colors.textDefault,
  },
  subtitle: {
    ...subtitleStyles,
    color: colors.textSecondary,
  },
  errorTitle: {
    ...titleStyles,
    color: colors.error,
  },
  errorSubtitle: {
    ...subtitleStyles,
    color: colors.error,
  },
  dotsContainer: {
    alignItems: 'flex-start',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: dotStyles,
  emptyDot: {
    ...dotStyles,
    borderColor: '#BEBEBE',
    borderWidth: 1,
  },
  errorDot: {
    ...dotStyles,
    borderColor: colors.error,
    borderWidth: 1,
  },
});

export const Head = styled.View`
  padding-top: 16;
  padding-bottom: 16;
  padding-left: 16;
  padding-right: 16;
  width: ${helpers.vw};
`;

export const NavRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const BackIcon = styled(MaterialIcon).attrs({
  name: 'arrow-back',
})`
  color: ${colors.textPrimary};
  font-size: 26;
`;

export const BackButton = styled.TouchableHighlight.attrs({
  underlayColor: 'transparent',
})``;
