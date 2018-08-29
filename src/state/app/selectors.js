export const getIsNeedToShowCredetialAlert = state =>
  !state.app.hasLaunched && state.app.isPinSetup;

export const getIsSettingsLoaded = state => state.app.isSettingsLoaded;
