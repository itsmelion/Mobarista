import { Pressable, Text, View } from 'dripsy';

import type { PressableProps } from 'react-native';
import type { SvgProps } from 'react-native-svg';

export interface CardProps extends PressableProps {
  Icon?: React.FC<SvgProps>;
  Status?: React.ReactElement;
  title: string;
}

export function Card(props: CardProps) {
  const { title, Status, Icon, ...restProps } = props;

  return (
    <Pressable sx={{ flexGrow: 0, flexShrink: 0, flexBasis: 'auto' }} {...restProps}>
      <View
        sx={{
          flexGrow: 0,
          flexShrink: 0,
          flexBasis: 'auto',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          bg: '$primary',
          alignItems: 'center',
          gap: '$3',
          p: '$3',
          borderRadius: 8,
        }}>
        {Icon && <Icon />}

        <Text variant='medium' sx={{ flex: 1, color: '#FFFFFF' }}>{title}</Text>

        {Status && (
        <View sx={{ flexGrow: 0, flexShrink: 0, flexBasis: 'auto' }}>
          {Status}
        </View>
        )}
      </View>
    </Pressable>
  );
}
