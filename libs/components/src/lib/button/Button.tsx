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
      <Card withShadow sx={{ minHeight: 78, justifyContent: 'center'}}>
        <Text
          variant='h2'
          sx={{
            fontSize: '$3',
            color: '$textContrast',
          }}>
          {title || children}
        </Text>
      </Card>
    </Pressable>
  );
}
