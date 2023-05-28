import { Text, SafeAreaView } from 'dripsy';
import { Card, MediumCoffeeSvg } from '@happynrwl/components';
import { useNavigation } from '@react-navigation/native';

export const config = {
  viewName: 'ExtrasSelection',
  title: 'Select your extra\'s',
};

export function ExtrasSelection() {
  const navigation = useNavigation();

  return (
    <SafeAreaView sx={{ flex: 1, bg: '#FFFFFF' }}>
      <Card
        Icon={MediumCoffeeSvg}
        title='Card Item'
        Status={<Text>status</Text>}
      />
    </SafeAreaView>
  );
}
