import { useMemo } from 'react';
import { useBrewExtrasDictionary } from '../machine/useBrewExtras';
import { useBrewSize } from '../machine/useBrewSize';
import { useBrewSelection } from './brew.slice';

export function useBrewChoices() {
  const brewSelection = useBrewSelection();
  const extraOptions = useBrewExtrasDictionary();
  const sizeOptions = useBrewSize();

  return useMemo(() => {
    const selectedExtras = brewSelection.extras.map((selectionId: string) => extraOptions[selectionId]);
    const selectedSize = sizeOptions?.find(({ _id }) => _id === brewSelection.size);

    return [
      brewSelection.style,
      selectedSize,
      ...selectedExtras,
    ];
  },[brewSelection, extraOptions, sizeOptions]);
}
