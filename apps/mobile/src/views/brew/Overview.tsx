import { Text, SafeAreaView } from 'dripsy';
import { Card, ListItem, MediumCoffeeSvg } from '@happynrwl/components';
import { useNavigation } from '@react-navigation/native';

export const config = {
  viewName: 'Overview',
  title: 'Overview',
};

export function SizeSelection() {
  const navigation = useNavigation();

  return (
    <SafeAreaView sx={{ flex: 1, bg: '#FFFFFF' }}>
      <ListItem
        Icon={MediumCoffeeSvg}
        title='Card Item'
        Status={<Text>status</Text>}
      />
    </SafeAreaView>
  );
}
