import _ from 'lodash';
import { useMachine } from './useMachine';
import { useStyleSelection } from '../brew/brew.slice';
import { useMemo } from 'react';

// TODO: Handle edge-cases
// TODO: array mapping efficiency

export function useBrewSize() {
  const { data } = useMachine();
  const styleId = useStyleSelection();

  const result = useMemo(() => {
    const sizesAvailable = _.keyBy(data?.sizes, '_id');
    const selectedStyle = data?.types.find((style) => style._id === styleId);
    const hydrateSizes = selectedStyle?.sizes.map((size) => sizesAvailable[size]);

    return hydrateSizes;
  }, [data, styleId]);

  return result;
}
