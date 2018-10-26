jest.mock('NativeModules', () => {
  return {
    SMXCrashlytics: {},
    RNLanguages: {},
    RNRandomBytes: {},
  };
});

jest.mock('react-native-fabric', () => {
  return {
    Answers: {
      logCustom: () => {},
      logLogin: () => {},
      logSignUp: () => {},
    },
  };
});

jest.mock('react-native-device-info', () => {
  return {
    getUniqueID: () => 4,
  };
});

jest.mock('react-native-randombytes', () => {
  return {
    randomBytes: () => {},
  };
});
