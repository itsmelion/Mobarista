import { Pressable, SxProp, Text, View } from 'dripsy';

import CheckSvg from '../icons/check.svg';
import ElipseSvg from '../icons/elipse.svg';

import { PressableProps, StyleSheet, ViewProps } from 'react-native';

export interface AccordionItemProps extends PressableProps {
  selected?: boolean;
  title: string;
}

export function AccordionItem(props: AccordionItemProps) {
  const { title, selected, children, ...restProps } = props;

  return (
    <Pressable sx={{ flexGrow: 0, flexShrink: 0, flexBasis: 'auto' }} {...restProps}>
      <View
        sx={{
          flexGrow: 0,
          flexShrink: 0,
          flexBasis: 'auto',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          bg: 'rgba(0, 0, 0, 0.1)',
          alignItems: 'center',
          gap: '$3',
          px: '$3',
          py: '$3',
          borderRadius: 4,
        }}>
        <Text variant='medium' sx={{ flex: 1, color: '#FFFFFF' }}>{title}</Text>

        <View sx={{
          flexGrow: 0,
          flexShrink: 0,
          flexBasis: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
          height: 28,
          width: 28,
        }}>
          <Icon><ElipseSvg /></Icon>
          {selected && <Icon sx={{ top: 8, left: 6}}><CheckSvg /></Icon>}
        </View>
      </View>
    </Pressable>
  );
}

const Icon = (props: ViewProps & { sx?: SxProp }) => (
  <View  {...props} sx={{ ...StyleSheet.absoluteFillObject, ...props.sx }} />
);
