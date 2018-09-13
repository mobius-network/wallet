import { StyleSheet } from 'react-native';

import { colors, fonts, helpers } from 'components/shared/Styleguide';

export default StyleSheet.create({
  grid: {
    alignItems: 'stretch',
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 16,
    paddingTop: 16,
    width: helpers.vw,
  },
  row: {
    alignItems: 'center',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 7,
    paddingTop: 7,
  },
  col: {
    alignItems: 'center',
    flexDirection: 'column',
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
