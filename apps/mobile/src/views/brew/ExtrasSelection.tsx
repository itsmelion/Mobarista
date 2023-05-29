import { Text, ScrollView, SafeAreaView } from 'dripsy';
import { useNavigation } from '@react-navigation/native';

import { Accordion, AccordionItem, Button, ListItem, iconResolver } from '@happynrwl/components';
import { useBrewExtras, useExtrasSelection, useSetExtras } from '@happynrwl/services';

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

  return (
    <SafeAreaView sx={{ flex: 1, bg: '#FFFFFF' }}>
      <ScrollView sx={{ flex: 1 }} contentContainerSx={{ p: '$3', gap: '$2' }}>
        {extras?.map((extraItem) => (
          <Accordion
            key={extraItem._id}
            HeaderComponent={(
              <ListItem title={extraItem.name} Icon={iconResolver(extraItem._id)} />
            )}>
            {extraItem.subselections.map((subItem) => (
              <AccordionItem
                title={subItem.name}
                key={subItem._id}
                selected={selectedExtras.includes(subItem._id)}
                onPress={() => {
                  // TODO: Allow only one option
                  addExtra(subItem._id)
                }}
              />
            ))}
          </Accordion>
        ))}

        <Button
          title="Continue"
          onPress={() => navigation.navigate(overviewView.config.viewName)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
