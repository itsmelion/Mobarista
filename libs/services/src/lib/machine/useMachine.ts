import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import type { MachineDTO } from './machine.types';

export interface ServicesProps {
  machineId: string; // maybe use zod for UID
}

const host = 'https://darkroastedbeans.coffeeit.nl';

/**
 *
 * @param machineId
 * @param UseQueryOptions
 * @returns Machine details and its many brew options available.
 */
export function useMachine<TData = MachineDTO>(
  machineId: string = '60ba1ab72e35f2d9c786c610',
  options?: UseQueryOptions<TData>
) {
  return useQuery<TData>({
    queryKey: ['coffee-machine', machineId],
    suspense: true,
    queryFn: () => fetch(`${host}/coffee-machine/${machineId}`, {
      "headers": {
        "accept": "application/json",
      },
      "method": "GET",
      "mode": "cors",
    })
   .then(r => r.json())
   .then(r => {
      // add machine name, which seems to be lacking.
      r.machineName = 'Lex';
      return r;
   }),
   ...options,
  });
}
