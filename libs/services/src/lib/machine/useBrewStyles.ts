import { MachineDTO } from './machine.types';
import { useMachine } from './useMachine';

/**
 *
 * @returns List of coffee styles available to be chosen.
 */
export function useBrewStyles() {
  return useMachine<MachineDTO['types']>('60ba1ab72e35f2d9c786c610', { select: (data) => data.types });
}
