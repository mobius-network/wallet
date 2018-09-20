const blacklist = require('metro-config/src/defaults/blacklist');
const path = require('path');

const cwd = path.resolve(__dirname);

const modulePath = moduleName => path.resolve(cwd, 'node_modules', moduleName);

module.exports = {
  watchFolders: [
    path.join(cwd, 'src'),
  ],
  resolver: {
    blacklistRE: blacklist(),
    extraNodeModules: {
      crypto: modulePath('react-native-crypto'),
      eventsource: modulePath('react-native-event-source'),
      fs: modulePath('react-native-level-fs'),
      http: modulePath('@tradle/react-native-http'),
      https: modulePath('https-browserify'),
      path: modulePath('path-browserify'),
      randombytes: modulePath('react-native-randombytes'),
      stream: modulePath('readable-stream'),
      vm: modulePath('vm-browserify'),
    },
  },
};
