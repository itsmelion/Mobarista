import { Text, SafeAreaView, ScrollView } from 'dripsy';
import { Button, Card, ListItem, MediumCoffeeSvg, Separator } from '@happynrwl/components';
import { useNavigation } from '@react-navigation/native';
import { useBrewExtras, useExtrasSelection } from '@happynrwl/services';

export const config = {
  viewName: 'Overview',
  title: 'Overview',
};

export function SizeSelection() {
  const navigation = useNavigation();
  const extras = useBrewExtras();
  const selectedExtras = useExtrasSelection();

  return (
    <SafeAreaView sx={{ flex: 1, bg: '$background', p: '$3' }}>
      {/* Could be a FlatList */}
      <ScrollView sx={{ flex: 1 }} contentContainerSx={{ gap: '$2' }}>
        <Card withShadow>
          <ListItem
            Icon={MediumCoffeeSvg}
            title='Card Item'
            Status={<Text>status</Text>}
          />
          <Separator />

          <ListItem
            Icon={MediumCoffeeSvg}
            title='Card Item'
            Status={<Text>status</Text>}
          />
          <Separator />

          <ListItem
            Icon={MediumCoffeeSvg}
            title='Card Item'
            Status={<Text>status</Text>}
          />
          <Separator />

          <ListItem
            Icon={MediumCoffeeSvg}
            title='Card Item'
            Status={<Text>status</Text>}
          />
        </Card>
      </ScrollView>

      {/* use absolute and offset scrollview end */}
      <Button
        title='Brew your coffee'
      />
    </SafeAreaView>
  );
}
