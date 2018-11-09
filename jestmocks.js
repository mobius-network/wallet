jest.mock('NativeModules', () => ({
  SMXCrashlytics: {},
  RNLanguages: {},
  RNRandomBytes: {},
}));

jest.mock('react-native-fabric', () => ({
  Answers: {
    logCustom: () => {},
    logLogin: () => {},
    logSignUp: () => {},
  },
}));

jest.mock('react-native-randombytes', () => ({
  randomBytes: () => {},
}));
