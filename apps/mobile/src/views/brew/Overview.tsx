import { Text, SafeAreaView, FlatList, View } from 'dripsy';
import { AccordionItem, Button, Card, ListItem, Separator, iconResolver } from '@happynrwl/components';
import { useBrewChoices, useClearExtras, useSetExtras } from '@happynrwl/services';
import { Fragment, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export const config = {
  viewName: 'Overview',
  title: 'Overview',
};

export function Overview() {
  const navigation = useNavigation();
  const selectionData = useBrewChoices();
  const clearExtras = useClearExtras();

  // on go back, clear the style and size;
  useEffect(() => navigation.addListener('beforeRemove', clearExtras), [navigation]);

  return (
    <SafeAreaView sx={{ flex: 1, bg: '$background', p: '$3' }}>
      <Card withShadow>
        <FlatList
          renderItem={Item}
          ItemSeparatorComponent={Separator}
          keyExtractor={({ _id }) => _id}
          data={selectionData}
          // ListFooterComponent={<Button title='Brew your coffee' />} better here? but card.
        />
      </Card>

      <View sx={{ flex: 1 }} />

      <Button title='Brew your coffee' />
    </SafeAreaView>
  );
}

const Item = ({ item }) => {
  if (item.parent) {
    return (
      <Fragment key={item._id}>
        <ListItem
          Icon={iconResolver(item.parent)}
          title={item.parentName}
          sx={{ w: '100%' }}
          Status={<Text sx={{ color: '$textContrast' }}>edit</Text>}
        />
        <AccordionItem title={item.name} selected sx={{ mb: '$2' }} />
      </Fragment>
    )
  }

  return (
    <ListItem
      key={item._id}
      Icon={iconResolver(item._id)}
      title={item.name}
      sx={{ w: '100%' }}
      Status={<Text sx={{ color: '$textContrast' }}>edit</Text>}
    />
  );
}
