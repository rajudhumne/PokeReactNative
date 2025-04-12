export interface IPokemonDetailsModel {
  abilities: IAbility[];
  base_experience: number;
  forms: ISpecies[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  past_types: any[];
  species: ISpecies;
  stats: IStat[];
  types: IType[];
  weight: number;
}

export interface IAbility {
  ability: ISpecies | null;
  is_hidden: boolean;
  slot: number;
}

export interface ISpecies {
  name: string;
  url: string;
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: ISpecies;
}

export interface IType {
  slot: number;
  type: ISpecies;
}
