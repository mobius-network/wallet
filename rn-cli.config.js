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
    'react-native': path.resolve(cwd, './node_modules/react-native'),
  },

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
