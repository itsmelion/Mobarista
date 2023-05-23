import React from 'react';

import { View, Text } from 'dripsy';

/* eslint-disable-next-line */
export interface CardProps {}

export function Card(props: CardProps) {
  return (
    <View sx={{ flex: 1, bg: '$primary' }}>
      <Text>Welcome to Card!</Text>
    </View>
  );
}
