export interface IPokemonSpeciesModel {
  egg_groups: IEggGroups[];
  flavor_text_entries: IFlavorTextEntry[];
}

export interface IEggGroups {
  name: string;
  url: string;
}

export interface IFlavorTextEntry {
  flavor_text: string;
  language: IEggGroups;
  version: IEggGroups;
}
