import { StyleSheet } from 'react-native';

import { colors, fonts, helpers } from 'components/shared/Styleguide';

export default StyleSheet.create({
  grid: {
    width: helpers.vw,
  },
  col: {
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 2,
    paddingRight: 2,
  },
  numberButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  numberButtonText: {
    color: colors.textPrimary,
    fontFamily: fonts.helveticaNeue.regular,
    fontSize: 26,
  },
  deleteButtonIcon: {
    color: colors.textPrimary,
    fontSize: 26,
    textAlign: 'center',
  },
});
