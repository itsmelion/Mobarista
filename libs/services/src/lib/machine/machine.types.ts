// TODO: zod?

export type MachineDTO = {
  machineName: string,
  "_id": string,
  "types": StyleOption[],
  "sizes": SizeOption[],
  "extras": ExtraOption[]
}

type ExtraOption = {
  "_id": string,
  "name": string,
  "subselections": Omit<ExtraOption, 'subselections'>[];
}

type SizeOption = {
  "_id": string,
  "name": string,
}

type StyleOption = {
  "_id": string,
  "name": string,
  "sizes": string[],
  "extras": string[],
}
