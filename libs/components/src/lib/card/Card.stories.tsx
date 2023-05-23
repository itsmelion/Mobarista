import type { Meta } from '@storybook/react-native';
import { Card } from './Card';

const Story: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
};
export default Story;

export const Primary = {
  args: {},
};
