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
  button: {
    alignItems: 'center',
    borderRadius: 32,
    height: 64,
    justifyContent: 'center',
    width: 64,
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
