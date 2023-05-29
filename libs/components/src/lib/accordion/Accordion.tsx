import { View } from 'dripsy';

import { Card } from '../card/Card';
import { AccordionItem } from './AccordionItem';
import { Separator } from '../separator/Separator';

import type { PressableProps, ViewProps } from 'react-native';
import { ListItem } from '../listItem/ListItem';


export interface AccordionProps extends ViewProps {
  selected?: boolean;
  HeaderComponent: React.ReactNode;
}

export function Accordion(props: AccordionProps) {
  const { HeaderComponent, selected, children, ...restProps } = props;

  return (
    <Card>
      {HeaderComponent}

      <View sx={{ gap: '$2' }}>
        <Separator />

        {children}
      </View>
    </Card>
  );
}
