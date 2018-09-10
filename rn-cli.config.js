const metro = require('metro');
const path = require('path');

const cwd = path.resolve(__dirname);

const modulePath = moduleName => path.resolve(__dirname, 'node_modules', moduleName);

const config = {
  getBlacklistRE() {
    return metro.createBlacklist([/Pods\/.*/]);
  },

  getProjectRoots() {
    return [
      cwd, // current directory
      path.join(cwd, 'src'),
    ];
  },

  /**
   * Specify where to look for assets that are referenced using
   * `image!<image_name>`. Asset directories for images referenced using
   * `./<image.extension>` don't require any entry in here.
   */
  getAssetRoots() {
    return [path.join(cwd, 'assets')];
  },

  resolver: {
    extraNodeModules: {
      crypto: modulePath('crypto-browserify'),
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

module.exports = config;
