import MediumCoffeeSvg from './lungo/medium.svg';
import SmallCoffeeSvg from './lungo/small.svg';
import LargeCoffeeSvg from './lungo/large.svg';
import CappuchinoSvg from './cappuchino/cappuchino.svg';
import EspressoSvg from './espresso/espresso.svg';
import MilkSvg from './milk/milk.svg';

enum KnownIconsByID {
  Espresso = '60be1db3c45ecee5d77ad890',
  Cappuccino = '60be1eabc45ecee5d77ad960',
  Sugar = '60ba197c2e35f2d9c786c525',
  Small = '60ba3368c45ecee5d77a016b',
  Medium = '60ba33dbc45ecee5d77a01f8',
  Large = '60ba18d13ca8c43196b5f606',
  Milk = '60ba34a0c45ecee5d77a0263',
}

export const iconResolver = (id: string) => {
  switch (id) {
    case KnownIconsByID.Medium:
      return MediumCoffeeSvg;

    case KnownIconsByID.Small:
      return SmallCoffeeSvg;

    case KnownIconsByID.Large:
      return LargeCoffeeSvg;

    case KnownIconsByID.Cappuccino:
    case KnownIconsByID.Sugar:
      return CappuchinoSvg;

    case KnownIconsByID.Espresso:
      return EspressoSvg;

    case KnownIconsByID.Milk:
      return MilkSvg;

    default: return null;
  }
}
