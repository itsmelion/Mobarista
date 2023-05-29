import _ from 'lodash';
import { useMemo } from 'react';

import { useMachine } from './useMachine';
import { useStyleSelection } from '../brew/brew.slice';

// TODO: Handle edge-cases
// TODO: array mapping efficiency

export function useBrewExtras() {
  const { data } = useMachine();
  const styleId = useStyleSelection();

  const result = useMemo(() => {
    const selectedStyle = data?.types.find((style) => style._id === styleId);
    const keyedExtras = _.keyBy(data?.extras, '_id');

    // const extrasAvailable = _.reduce(data?.extras, (prev, curr) => {
    //   const flattenedSubSelection = curr?.subselections.map((item) => ({
    //     id: item._id,
    //     parent: curr._id,
    //     parentName: curr.name,
    //     name: item.name,
    //   }));
    //   const keyedSubselections = _.keyBy(flattenedSubSelection, 'id');

    //   return { ...prev, ...keyedSubselections };
    // }, {});


    const hydratedExtras = selectedStyle?.extras.map((key) => keyedExtras[key]);

    return hydratedExtras;
  }, [data, styleId]);

  return result;
}
