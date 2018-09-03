import { StyleSheet } from 'react-native';

import { colors, fonts, helpers } from 'components/shared/Styleguide';

export default StyleSheet.create({
  grid: {
    width: helpers.vw,
  },
  col: {
    alignItems: 'center',
    flexDirection: 'column',
    height: 63,
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
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
