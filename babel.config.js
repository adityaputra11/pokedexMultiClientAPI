module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@atom': './src/components/atoms',
          '@molecule': './src/components/molecules',
          '@organism': './src/components/organisms',
          '@template': './src/components/templates',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
