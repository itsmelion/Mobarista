// TODO: zod?

export type MachineDTO = {
  machineName: string,
  "_id": string,
  "types": StyleOption[],
  "sizes": SizeOption[],
  "extras": ExtraOption[]
}

type ExtraOption = OptionLike & {
  "subselections": Omit<ExtraOption, 'subselections'>[];
}

type SizeOption = OptionLike;

export type StyleOption = OptionLike & {
  "sizes": string[],
  "extras": string[],
}

export type OptionLike = {
  "_id": string,
  "name": string,
}
