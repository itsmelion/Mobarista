import { makeTheme } from 'dripsy'

import * as base from '../base';

const colors: typeof base.colors = {
  $text: '#FFFFFF',
  $textContrast: '#000000',
  $background: '#1F1F2E',
  $primary: '#372F3F',
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
