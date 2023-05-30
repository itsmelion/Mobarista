import { Pressable, Text, View } from 'dripsy';

import type { ViewProps } from 'react-native';
import type { SvgProps } from 'react-native-svg';

import { Card } from '../card/Card';

export interface ListItemProps extends ViewProps {
  Icon?: React.FC<SvgProps>;
  Status?: React.ReactElement;
  title: string;
  withShadow?: boolean;
}

export function ListItem(props: ListItemProps) {
  const { title, Status, Icon, children, withShadow, ...restProps } = props;

  return (
    <Card
      {...restProps}
      withShadow={withShadow}
      sx={{
        minHeight: 95,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
      {Icon && <Icon />}

      <Text variant='medium' sx={{ flex: 1, color: '#FFFFFF' }}>
        {title}
      </Text>

      {Status && (
      <View sx={{ flexGrow: 0, flexShrink: 0, flexBasis: 'auto' }}>
        {Status}
      </View>
      )}
    </Card>
  );
}
