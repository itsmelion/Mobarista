import type { Meta } from '@storybook/react-native';
import { Text } from 'dripsy';

const Story: Meta<typeof Text> = {
  component: Text,
  title: 'Typography',
};

export default Story;

export const H1 = {
  args: {
    children: 'Hello Worlds',
    variant: 'h1',
  },
};

export const H2 = {
  args: {
    children: 'Hello Worlds',
    variant: 'h2',
  },
};

export const Body = {
  args: {
    children: 'Hello Worlds',
    variant: 'body',
  },
};

export const Medium = {
  args: {
    children: 'Hello Worlds',
    variant: 'Medium',
  },
};

export const Button = {
  args: {
    children: 'Hello Worlds',
    variant: 'button',
  },
};
