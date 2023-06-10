import { useColorScheme } from 'react-native';
import { DripsyProvider } from 'dripsy';
import { matcha, nightshade } from '@happynrwl/components';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';

function themeWrapper(StoryFn) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <DripsyProvider theme={isDarkMode ? nightshade : matcha}>
      <StoryFn />
    </DripsyProvider>
  );
}

export const decorators = [
  withBackgrounds,
  themeWrapper
];


export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: [
    {name: 'plain', value: '#FAFAFA', default: true},
    {name: 'warm', value: 'hotpink'},
    {name: 'cool', value: 'deepskyblue'},
  ],
};
