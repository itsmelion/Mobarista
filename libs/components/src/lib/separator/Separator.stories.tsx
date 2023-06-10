import type { Meta } from '@storybook/react-native';
import { Separator } from './Separator';

const Story: Meta<typeof Separator> = {
  component: Separator,
  title: 'Separator',
};

export default Story;


export const Primary = {
  args: {
    sx: {
      m: '$3',
    }
  },
};
