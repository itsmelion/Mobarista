import { PressableProps } from 'react-native';

import { Pressable, Text, View } from 'dripsy';
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
          p: '$3'
        }}>
        {Icon && <Icon />}

        <Text sx={{ flex: 1 }}>{title}</Text>

        {Status && (
        <View sx={{ flexGrow: 0, flexShrink: 0, flexBasis: 'auto' }}>
          {Status}
        </View>
        )}
      </View>
    </Pressable>
  );
}
