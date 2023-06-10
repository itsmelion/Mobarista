import type { Meta } from '@storybook/react-native';
import { ListItem } from './ListItem';
import { Text } from 'dripsy';
import SomeSVGIcon from '../icons/lungo/medium.svg';

const Story: Meta<typeof ListItem> = {
  component: ListItem,
  title: 'ListItem',
};

export default Story;

export const Primary = {
  args: {
    title: 'I am a list item',
    Icon: SomeSVGIcon,
    Status: <Text>(some comp)</Text>
  },
};
