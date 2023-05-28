import { Text, SafeAreaView, ScrollView } from 'dripsy';
import { Card, MediumCoffeeSvg } from '@happynrwl/components';
import { useNavigation } from '@react-navigation/native';

import * as sizeSelection from './SizeSelection'

export const config = {
  viewName: 'StyleSelection',
  title: 'Select your style',
};

export function StyleSelection() {
  const navigation = useNavigation();

  return (
    <SafeAreaView sx={{ flex: 1, bg: '#FFFFFF' }}>
      <ScrollView sx={{ flex: 1 }} contentContainerSx={{ p: '$3' }}>
        <Card
          Icon={MediumCoffeeSvg}
          title='Card Item'
          Status={<Text>status</Text>}
          onPress={() => navigation.navigate(sizeSelection.config.viewName)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
