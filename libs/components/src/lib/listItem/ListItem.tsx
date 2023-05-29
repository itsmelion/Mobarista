import { Pressable, Text, View } from 'dripsy';

import type { PressableProps } from 'react-native';
import type { SvgProps } from 'react-native-svg';

import { Card } from '../card/Card';

export interface ListItemProps extends PressableProps {
  Icon?: React.FC<SvgProps>;
  Status?: React.ReactElement;
  title: string;
}

export function ListItem(props: ListItemProps) {
  const { title, Status, Icon, children, ...restProps } = props;

  return (
    <Pressable sx={{ flexGrow: 0, flexShrink: 0, flexBasis: 'auto' }} {...restProps}>
      <Card sx={{ flexDirection: 'row', alignItems: 'center',}}>
        {Icon && <Icon />}

        <Text variant='medium' sx={{ flex: 1, color: '#FFFFFF' }}>{title}</Text>

        {Status && (
        <View sx={{ flexGrow: 0, flexShrink: 0, flexBasis: 'auto' }}>
          {Status}
        </View>
        )}
      </Card>
    </Pressable>
  );
}
