import { makeTheme } from 'dripsy'

export const colors = {
  $text: '#000000',
  $textContrast: '#FFFFFF',
  $background: '#FFFFFF',
  $primary: 'tomato',
};

export const baseTheme = {
  colors,
  space: {
    // recommended: set 0 first, then double for consistent nested spacing
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
  },
  fontSizes: {
    $0: 12,
    $1: 14,
    $2: 16,
    $3: 18,
    $4: 24,
    $5: 28,
    $6: 32,
  },
  text: {
    h1: {
      fontSize: '$4',
      fontFamily: "Metropolis-Medium",
      fontWeight: '500'
    },
    h2: {
      fontSize: '$2',
      fontFamily: "Metropolis-Bold",
      fontWeight: '700'
    },
    button: {
      fontSize: '$3',
      fontFamily: "Metropolis-Bold",
      fontWeight: '700',
      color: '$textContrast'
    },
    body: {
      fontSize: '$2',
      fontFamily: "Metropolis-Medium",
      fontWeight: '500',
      color: '$text'
    },
    medium: {
      fontSize: '$1',
      fontFamily: "Metropolis-SemiBold",
      fontWeight: '600',
    },
  },
};

export const theme = makeTheme(baseTheme);

export type BaseTheme = typeof theme;

declare module 'dripsy' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends BaseTheme {}
}
