import { ScrollView, SafeAreaView } from 'dripsy';
import { ListItem, MediumCoffeeSvg, iconResolver } from '@happynrwl/components';
import { useNavigation } from '@react-navigation/native';
import { useBrewSize, useSetSize } from '@happynrwl/services';

import * as extrasSelection from './ExtrasSelection';

export const config = {
  viewName: 'SizeSelection',
  title: 'Select your size',
};

export function SizeSelection() {
  const navigation = useNavigation();
  const sizes = useBrewSize();
  const setSize = useSetSize();

  return (
    <SafeAreaView sx={{ flex: 1, bg: '#FFFFFF' }}>
      <ScrollView sx={{ flex: 1 }} contentContainerSx={{ p: '$3', gap: '$2' }}>
        {sizes?.map((sizeItem) => (
          <ListItem
            withShadow
            Icon={iconResolver(sizeItem._id)}
            title={sizeItem.name}
            key={sizeItem._id}
            onPress={() => {
              setSize(sizeItem._id);
              navigation.navigate(extrasSelection.config.viewName)
            }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
