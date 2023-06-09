/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./apps/storybook/.storybook/libs/components/src/lib",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:apps[\\\\/]storybook[\\\\/]\\.storybook[\\\\/]libs[\\\\/]components[\\\\/]src[\\\\/]lib(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
  {
    titlePrefix: "",
    directory: "./libs/components/src/lib",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:libs[\\\\/]components[\\\\/]src[\\\\/]lib(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";
import "@storybook/addon-ondevice-backgrounds/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./libs/components/src/lib/button/Button.stories.tsx": require("../../../libs/components/src/lib/button/Button.stories.tsx"),
    "./libs/components/src/lib/card/Card.stories.tsx": require("../../../libs/components/src/lib/card/Card.stories.tsx"),
    "./libs/components/src/lib/listItem/ListItem.stories.tsx": require("../../../libs/components/src/lib/listItem/ListItem.stories.tsx"),
    "./libs/components/src/lib/separator/Separator.stories.tsx": require("../../../libs/components/src/lib/separator/Separator.stories.tsx"),
    "./libs/components/src/lib/Typography.stories.tsx": require("../../../libs/components/src/lib/Typography.stories.tsx"),
  };
};

configure(getStories, module, false);
