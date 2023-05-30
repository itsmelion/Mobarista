import _ from 'lodash';
import { useMemo } from 'react';

import { useMachine } from './useMachine';
import { useStyleSelection } from '../brew/brew.slice';

/**
 *
 * @returns List of sizes available to choose for the coffee style selected.
 */
export function useBrewSize() {
  const { data } = useMachine();
  const styleChoice = useStyleSelection();

  const result = useMemo(() => {
    const sizesAvailable = _.keyBy(data?.sizes, '_id');
    const hydrateSizes = styleChoice?.sizes.map((size) => sizesAvailable[size]);

    return hydrateSizes;
  }, [data, styleChoice]);

  return result;
}
