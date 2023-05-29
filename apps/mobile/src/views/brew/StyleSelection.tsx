import { ActivityIndicator } from 'react-native';
import { SafeAreaView, ScrollView } from 'dripsy';
import { ListItem, MediumCoffeeSvg, iconResolver } from '@happynrwl/components';
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
    <SafeAreaView sx={{ flex: 1, bg: '#FFFFFF' }}>
      <ScrollView sx={{ flex: 1 }} contentContainerSx={{ p: '$3', gap: '$2' }}>
        {data?.map(styleItem => (
          <ListItem
            withShadow
            key={styleItem._id}
            Icon={iconResolver(styleItem._id)}
            title={styleItem.name}
            onPress={() => {
              setStyle(styleItem._id);
              navigation.navigate(sizeSelection.config.viewName)
            }}
          />
        )) ?? <ActivityIndicator/>}
      </ScrollView>
    </SafeAreaView>
  );
}
