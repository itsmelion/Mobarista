import { ListItem, iconResolver } from '@happynrwl/components';
import { useBrewStyles, useSetStyle } from '@happynrwl/services';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, Pressable } from 'dripsy';
import { Suspense } from 'react';
import { ActivityIndicator } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';


import * as sizeSelection from './SizeSelection'

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
      <ScrollView contentContainerSx={{ p: '$3', gap: '$2' }} sx={{ flex: 1 }}>
        <ErrorBoundary>
          <Suspense fallback={<ActivityIndicator/>}>
            {data.map(styleItem => (
              <Pressable
                key={styleItem._id}
                onPress={() => {
                  setStyle(styleItem);
                  navigation.navigate(sizeSelection.config.viewName)
                }}>
                <ListItem
                  Icon={iconResolver(styleItem._id)}
                  title={styleItem.name}
                  withShadow
                />
              </Pressable>
            ))}
          </Suspense>
        </ErrorBoundary>
      </ScrollView>
    </SafeAreaView>
  );
}
