import { StyleSheet } from 'react-native';

import {
  colors,
  fonts,
  fontSizes,
  helpers,
} from 'components/shared/Styleguide';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textContainer: {
    alignItems: 'stretch',
    flexDirection: 'column',
    paddingBottom: 44,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 44,
  },
  title: {
    color: colors.textDefault,
    fontFamily: fonts.helveticaNeue.bold,
    fontSize: fontSizes.secondaryTitle,
    marginBottom: 9,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: fontSizes.default,
    lineHeight: helpers.calculateLineHeight(fontSizes.default),
    textAlign: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  timer: {
    fontFamily: fonts.helveticaNeue.bold,
    fontSize: fontSizes.default,
    color: colors.textDefault,
  },
});
