import { StyleSheet } from 'react-native';

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
  textAlign: 'center',
  position: 'absolute',
  width: helpers.vw - 48,
  bottom: -(helpers.calculateLineHeight(fontSizes.default) + 9),
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
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
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
