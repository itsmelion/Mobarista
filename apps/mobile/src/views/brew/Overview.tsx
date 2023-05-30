import { Text, SafeAreaView, FlatList, View } from 'dripsy';
import { Button, Card, ListItem, Separator, iconResolver } from '@happynrwl/components';
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
      <Card
        withShadow
        sx={{
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: 'auto',
        }}>
      <FlatList
        renderItem={Item}
        ItemSeparatorComponent={Separator}
        keyExtractor={({ id }) => id}
        data={[
          { name: 'Milks', id: '60be1eabc45ecee5d77ad960' },
          { name: 'Coffee', id: '60be1db3c45ecee5d77ad890' },
          { name: 'Ristretto', id: '60ba197c2e35f2d9c786c525' },
          { name: 'Lungo', id: '60ba3368c45ecee5d77a016b' },
        ]}
        // ListFooterComponent={<Button title='Brew your coffee' />} better here? but card.
      />
      </Card>

      <View sx={{ flex: 1 }} />

      <Button title='Brew your coffee' />
    </SafeAreaView>
  );
}

const Item = ({ item }) => (
  <ListItem
    key={item.key}
    Icon={iconResolver(item.id)}
    title={item.name}
    sx={{ w: '100%' }}
    Status={<Text>edit</Text>}
  />
)
