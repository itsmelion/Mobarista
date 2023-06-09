import {
  Accordion, AccordionItem, Button, ListItem, iconResolver,
} from '@happynrwl/components';
import {
  useBrewExtras, useClearExtras, useExtrasSelection, useSetExtras, useSetSize,
} from '@happynrwl/services';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, SafeAreaView } from 'dripsy';
import { useEffect } from 'react';

import * as overviewView from './Overview';

export const config = {
  viewName: 'ExtrasSelection',
  title: 'Select your extra\'s',
};

export function ExtrasSelection() {
  const navigation = useNavigation();
  const extras = useBrewExtras();
  const selectedExtras = useExtrasSelection();
  const addExtra = useSetExtras();
  const clearExtras = useClearExtras();
  const clearSize = useSetSize();

  // on go back, clear the extras and size;
  useEffect(() => navigation.addListener('beforeRemove', () => {
    clearExtras();
    clearSize(null);
  }), [navigation, clearExtras, clearSize]);

  return (
    <SafeAreaView sx={{ flex: 1, bg: '$background', p: '$3' }}>
      <ScrollView contentContainerSx={{ gap: '$2' }} sx={{ h: '100%', w: '100%' }}>
        {extras?.map((extraItem) => (
          <Accordion
            key={extraItem._id}
            HeaderComponent={(
              <ListItem Icon={iconResolver(extraItem._id)} title={extraItem.name} />
            )}>
            {extraItem.subselections.map((subItem) => (
              <AccordionItem
                key={subItem._id}
                onPress={() => {
                  // TODO: Allow only one option
                  addExtra(subItem._id);
                }}
                selected={selectedExtras.includes(subItem._id)}
                title={subItem.name}
              />
            ))}
          </Accordion>
        ))}
      </ScrollView>

      <View sx={{ flex: 1 }} />

      <Button
        onPress={() => navigation.navigate(overviewView.config.viewName)}
        title="Continue"
      />
    </SafeAreaView>
  );
}
