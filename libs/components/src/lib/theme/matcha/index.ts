import { makeTheme } from 'dripsy';

import * as base from '../base';

const colors: typeof base.colors = {
  $text: '#000000',
  $textContrast: '#FFFFFF',
  $background: '#FFFFFF',
  $primary: '#AED7A0',
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
