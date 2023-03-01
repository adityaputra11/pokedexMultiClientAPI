module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      alias: {
        '@atoms': './src/components/atoms',
        '@molecules': './src/components/molecules',
        '@organisms': './src/components/organisms',
        '@templates': './src/components/templates',
        '@theme': './src/theme',
      },
    },
  },
};
