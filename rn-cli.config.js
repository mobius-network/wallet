const metro = require('metro');
const path = require('path');

const cwd = path.resolve(__dirname);

function getRoots() {
  return [
    cwd, // current directory
    path.resolve(cwd, '../..'), // project directory
  ];
}

const config = {
  getBlacklistRE() {
    return metro.createBlacklist([
      /.*\/packages\/components\/node_modules\/.*/,
      /Pods\/.*/,
    ]);
  },

  getProjectRoots() {
    return getRoots();
  },

  /**
   * Specify where to look for assets that are referenced using
   * `image!<image_name>`. Asset directories for images referenced using
   * `./<image.extension>` don't require any entry in here.
   */
  getAssetRoots() {
    return getRoots();
  },

  extraNodeModules: {
    // TODO: filter out unnecessary libraries
    'react-native': path.resolve(cwd, './node_modules/react-native'),
    'react-native-crypto': path.resolve(cwd, './node_modules/react-native-crypto'),
    crypto: path.resolve(cwd, './node_modules/react-native-crypto'),
    stream: path.resolve(cwd, './node_modules/stream-browserify'),
    randombytes: path.resolve(cwd, './node_modules/react-native-randombytes'),
    eventsource: path.resolve(cwd, './node_modules/react-native-event-source'),
    '@tradle/react-native-http': path.resolve(cwd, './node_modules/@tradle/react-native-http'),
    vm: path.resolve(cwd, './node_modules/vm-browserify'),
    fs: path.resolve(cwd, './node_modules/react-native-level-fs'),
    path: path.resolve(cwd, './node_modules/path-browserify'),
    https: path.resolve(cwd, './node_modules/https-browserify'),
    'https-browserify': path.resolve(cwd, './node_modules/https-browserify'),
    http: path.resolve(cwd, './node_modules/@tradle/react-native-http'),
  },

  // TODO: fix non RN error happeninng on `react-native link`
  // getDependencyConfig(packageName) {
  //   const platforms = this.getPlatformConfig();
  //   const folder = path.join(process.cwd(), 'node_modules', packageName);
  //
  //   const result = { assets: [], commands: {}, params: [] };
  //
  //   Object.keys(platforms).forEach(key => {
  //     result[key] = platforms[key].dependencyConfig(folder, {});
  //   });
  //
  //   return result;
  // },
};

module.exports = config;
