import {
  AccordionItem, Button, Card, ListItem, Separator, iconResolver,
} from '@happynrwl/components';
import { useBrewChoices, useClearExtras } from '@happynrwl/services';
import { useNavigation } from '@react-navigation/native';
import {
  Text, SafeAreaView, FlatList, View,
} from 'dripsy';
import { Fragment, useEffect } from 'react';

export const config = {
  viewName: 'Overview',
  title: 'Overview',
};

export function Overview() {
  const navigation = useNavigation();
  const selectionData = useBrewChoices();
  const clearExtras = useClearExtras();

  // on go back, clear the style and size;
  useEffect(() => navigation.addListener('beforeRemove', clearExtras), [navigation, clearExtras]);

  return (
    <SafeAreaView sx={{ flex: 1, bg: '$background', p: '$3' }}>
      <Card withShadow>
        <FlatList
          data={selectionData}
          ItemSeparatorComponent={Separator}
          keyExtractor={({ _id }) => _id}
          renderItem={Item}
          // ListFooterComponent={<Button title='Brew your coffee' />} better here? but card.
        />
      </Card>

      <View sx={{ flex: 1 }} />

      <Button title="Brew your coffee" />
    </SafeAreaView>
  );
}

const Item = ({ item }) => {
  if (item.parent) {
    return (
      <Fragment key={item._id}>
        <ListItem
          Icon={iconResolver(item.parent)}
          Status={<Text sx={{ color: '$textContrast' }}>edit</Text>}
          sx={{ w: '100%' }}
          title={item.parentName}
        />
        <AccordionItem selected sx={{ mb: '$2' }} title={item.name} />
      </Fragment>
    );
  }

  return (
    <ListItem
      key={item._id}
      Icon={iconResolver(item._id)}
      Status={<Text sx={{ color: '$textContrast' }}>edit</Text>}
      sx={{ w: '100%' }}
      title={item.name}
    />
  );
};
