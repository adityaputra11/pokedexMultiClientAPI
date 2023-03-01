/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const extraNodeModules = {
  '@atoms': path.resolve(__dirname, 'src/components/atoms'),
  '@molecules': path.resolve(__dirname, 'src/components/molecules'),
  '@organisms': path.resolve(__dirname, 'src/components/organisms'),
  '@templates': path.resolve(__dirname, 'src/components/templates'),
  '@theme': path.resolve(__dirname, 'src/components/theme'),
};

const watchFolders = [path.resolve(__dirname, 'src')];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules,
  },
  watchFolders,
};
