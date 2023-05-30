import _ from 'lodash';
import { useMemo } from 'react';

import { OptionLike } from './machine.types';
import { useMachine } from './useMachine';
import { useStyleSelection } from '../brew/brew.slice';

/**
 *
 * @returns List of complements available to choose for the coffee style selected.
 */
export function useBrewExtras() {
  const { data } = useMachine();
  const styleChoice = useStyleSelection();

  const result = useMemo(() => {
    const keyedExtras = _.keyBy(data?.extras, '_id');
    const hydratedExtras = styleChoice?.extras.map((key) => keyedExtras[key]);

    return hydratedExtras;
  }, [data, styleChoice]);

  return result;
}

type ExtraDictionaryEntry = OptionLike & { parent: string, parentName: string };

/**
 *
 * @returns Flattened list of all extra options and their parents.
 */
export function useBrewExtrasDictionary() {
  const { data } = useMachine();

  const result = useMemo<Record<string, ExtraDictionaryEntry>>(() => {
    const parentsExtras = _.keyBy(data?.extras, '_id');

    const extrasAvailable = _.reduce(data?.extras, (prev, curr) => {
      const flattenedSubSelection = curr?.subselections.map((item) => ({
        id: item._id,
        parent: curr._id,
        parentName: curr.name,
        name: item.name,
      }));
      const keyedSubselections = _.keyBy(flattenedSubSelection, 'id');

      return { ...prev, ...keyedSubselections };
    }, {} as Record<string, ExtraDictionaryEntry>);

    return { ...parentsExtras, ...extrasAvailable };
  }, [data]);

  return result;
}
