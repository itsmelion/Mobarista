import { getHeaderTitle } from '@react-navigation/elements';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import type { Route } from '@react-navigation/routers';
import { Pressable, View, Text } from 'dripsy';

import ChevronSvg from '../icons/chevron.svg';

interface NavigationHeaderProps extends NativeStackHeaderProps {
  route: Route<string, { title: string }>;
}

export function Header({ navigation, route, options, back }:NavigationHeaderProps) {
  const title = getHeaderTitle(options, route.name);

  return (
    <View style={options.headerStyle} sx={{ p: '$3', bg: '$background' }}>
      <View sx={{ flex: 0, flexDirection: 'row', alignItems: 'center' }}>
        {!back ? null : (
          <Pressable sx={{ p: '$1', mr: '$2' }} onPress={navigation.goBack}>
            <ChevronSvg />
          </Pressable>
        )}

        <Text variant='h2'>{title}</Text>
      </View>

      <Text variant='h1'>{route.params.title}</Text>
    </View>
  );
};
