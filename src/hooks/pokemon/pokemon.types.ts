export interface IPokemonState {
  pokemons: IPokemon[];
  pokemon: IGetPokemonByName | null;
  pokemon2: IGetPokemonByName | null;
  isLoading: boolean;
  getPokemons: () => Promise<void>;
  getPokemonByName: (name: string) => Promise<void>;
  getPokemon2ByName: (name: string) => Promise<void>;
}

export interface IPokemon {
  name: string;
  img: string;
}

export interface IGetPokemons {
  count: number;
  next: string;
  previous: any;
  results: IPokemon[];
}

export interface IGetPokemonByName {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: Ability[];
  forms: Form[];
  moves: Mfe[];
  stats: Stat[];
}

export interface Ability {
  ability: Ability2;
  is_hidden: boolean;
  slot: number;
}

export interface Ability2 {
  name: string;
  url: string;
}

export interface Form {
  name: string;
  url: string;
}

export interface Mfe {
  move: Move;
  version_group_details: VersionGroupDetail[];
}

export interface Move {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  order?: number;
  version_group: VersionGroup;
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

export interface Stat2 {
  name: string;
  url: string;
}
