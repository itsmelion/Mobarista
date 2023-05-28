import { getHeaderTitle } from '@react-navigation/elements';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import type { Route } from '@react-navigation/routers';
import { Pressable, View, Text } from 'dripsy';

import { ChevronSvg } from '@happynrwl/components';

interface NavigationHeaderProps extends NativeStackHeaderProps {
  route: Route<string, { title: string }>;
}

export function Header({ navigation, route, options, back }:NavigationHeaderProps) {
  const title = getHeaderTitle(options, route.name);

  return (
    <View style={options.headerStyle} sx={{ p: '$3', bg: '#FFFFFF' }}>
      <View sx={{ flex: 0, flexDirection: 'row', alignItems: 'center' }}>
        {back ? <Pressable sx={{ p: '$1'}} onPress={navigation.goBack}><ChevronSvg /></Pressable> : null}

        <Text variant='h2'>{title}</Text>
      </View>

      <Text variant='h1'>{route.params.title}</Text>
    </View>
  );
};
