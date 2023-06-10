const {default: AsyncStorage} = require('@react-native-async-storage/async-storage');

module.exports = {
  Storage: AsyncStorage,
  stories: [
    './libs/components/src/lib/**/*.stories.?(ts|tsx|js|jsx)',
    '../../../libs/components/src/lib/**/*.stories.?(ts|tsx|js|jsx)'
  ],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-backgrounds',
  ],
};
