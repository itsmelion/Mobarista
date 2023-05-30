import { Pressable, View, styled } from 'dripsy';
import type { ViewProps } from 'react-native';
import { useState } from 'react';
import { AnimatePresence, MotiView } from 'moti';

import { Card } from '../card/Card';
import { Separator } from '../separator/Separator';


export interface AccordionProps extends ViewProps {
  selected?: boolean;
  HeaderComponent: React.ReactNode;
}

export function Accordion(props: AccordionProps) {
  const { HeaderComponent, selected, children, ...restProps } = props;
  const [isExpanded, setExpanded] = useState(false);

  return (
    <Card>
      <Pressable onPress={() => setExpanded(v => !v)}>
        {HeaderComponent}
      </Pressable>

      <AnimatePresence>
        {isExpanded && (
          <AnimatedView from={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}>
            <Separator />

            {children}
          </AnimatedView>
        )}
      </AnimatePresence>
    </Card>
  );
}

const AnimatedView = styled(MotiView)({ gap: '$2' });
