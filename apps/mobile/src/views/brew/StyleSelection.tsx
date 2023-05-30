import { ActivityIndicator } from 'react-native';
import { SafeAreaView, ScrollView, Pressable } from 'dripsy';
import { ListItem, iconResolver } from '@happynrwl/components';
import { useNavigation } from '@react-navigation/native';

import * as sizeSelection from './SizeSelection'
import { useBrewStyles, useSetStyle } from '@happynrwl/services';

export const config = {
  viewName: 'StyleSelection',
  title: 'Select your style',
};

export function StyleSelection() {
  const navigation = useNavigation();
  const { data } = useBrewStyles();
  const setStyle = useSetStyle();

  return (
    <SafeAreaView sx={{ flex: 1, bg: '$background' }}>
      <ScrollView sx={{ flex: 1 }} contentContainerSx={{ p: '$3', gap: '$2' }}>
        {data?.map(styleItem => (
          <Pressable
            key={styleItem._id}
            onPress={() => {
              setStyle(styleItem._id);
              navigation.navigate(sizeSelection.config.viewName)
            }}>
            <ListItem
              withShadow
              Icon={iconResolver(styleItem._id)}
              title={styleItem.name}
            />
          </Pressable>
        )) ?? <ActivityIndicator/>}
      </ScrollView>
    </SafeAreaView>
  );
}
