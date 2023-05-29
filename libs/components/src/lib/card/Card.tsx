import { View, SxProp } from 'dripsy';

import type { ViewProps } from 'react-native';

export interface CardProps extends ViewProps {
  sx?: SxProp;
  withShadow?: boolean;
}

export function Card(props: CardProps) {
  const { sx, withShadow, ...restProps } = props;

  return (
    <View sx={{
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      flexWrap: 'nowrap',
      bg: '$primary',
      py: '$3',
      px: '$3',
      gap: '$3',
      borderRadius: 4,
      elevation: withShadow ? 2 : 0,
      ...sx,
    }} {...restProps} />
  );
}
