import type { PressableProps } from 'react-native';
import { Pressable, SxProp, Text } from 'dripsy';
import { Card } from '../card/Card';

export interface ButtonProps extends PressableProps {
  title?: string;
  disabled?: boolean;
  children?: string;
  sx?: SxProp;
}

export function Button({ title, sx, children, ...props }: ButtonProps) {
  return (
    <Pressable {...props} sx={sx}>
      <Card>
        <Text variant='h2' sx={{ fontSize: '$3', color: '#FFFFFF' }}>
          {title || children}
        </Text>
      </Card>
    </Pressable>
  );
}
