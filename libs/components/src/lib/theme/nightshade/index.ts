import { makeTheme } from 'dripsy'

import * as base from '../base';

const colors: typeof base.colors = {
  $text: '#000',
  $background: '#fff',
  $primary: 'tomato',
};

export const theme = makeTheme({
  ...base.baseTheme,
  colors,
});

export type NightShadeTheme = typeof theme;

declare module 'dripsy' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends NightShadeTheme {}
}
