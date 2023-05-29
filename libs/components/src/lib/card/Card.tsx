import { View, SxProp } from 'dripsy';

import type { ViewProps } from 'react-native';

export interface CardProps extends ViewProps {
  sx?: SxProp;
}

export function Card(props: CardProps) {
  const { sx, ...restProps } = props;

  return (
    <View sx={{
      ...sx,
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto',
      flexWrap: 'nowrap',
      bg: '$primary',
      p: '$3',
      gap: '$3',
      borderRadius: 4,
    }} {...restProps} />
  );
}
