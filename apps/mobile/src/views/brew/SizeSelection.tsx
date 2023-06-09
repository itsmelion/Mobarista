import { ListItem, iconResolver } from '@happynrwl/components';
import { useBrewSize, useSetSize, useSetStyle } from '@happynrwl/services';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, SafeAreaView, Pressable } from 'dripsy';
import { useEffect } from 'react';

import * as extrasSelection from './ExtrasSelection';

export const config = {
  viewName: 'SizeSelection',
  title: 'Select your size',
};

export function SizeSelection() {
  const navigation = useNavigation();
  const sizes = useBrewSize();
  const setSize = useSetSize();
  const setStyle = useSetStyle();

  // on go back, clear the style and size;
  useEffect(() => navigation.addListener('beforeRemove', () => {
    setStyle(null);
    setSize(null);
  }), [navigation, setStyle, setSize]);

  return (
    <SafeAreaView sx={{ flex: 1, bg: '$background' }}>
      <ScrollView contentContainerSx={{ p: '$3', gap: '$2' }} sx={{ flex: 1 }}>
        {sizes?.map((sizeItem) => (
          <Pressable
            key={sizeItem._id}
            onPress={() => {
              setSize(sizeItem._id);
              navigation.navigate(extrasSelection.config.viewName);
            }}>
            <ListItem
              Icon={iconResolver(sizeItem._id)}
              title={sizeItem.name}
              withShadow
            />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
