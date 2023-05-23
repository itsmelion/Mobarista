import { makeTheme } from 'dripsy';

import * as base from '../base';

const colors: typeof base.colors = {
  $text: '#fff',
  $background: '#8E6',
  $primary: 'tomato',
};

export const theme = makeTheme({
  ...base.baseTheme,
  colors,
});

export type MatchaTheme = typeof theme;

declare module 'dripsy' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends MatchaTheme {}
}
