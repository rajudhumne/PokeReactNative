import {ColorVariant} from '../../../assets/colors/colorPalette';
import {IPokemonSpeciesModel} from './PokemonSpeciesModel';

export interface PokemonDetailResponse {
  name: string;
  order: number;
  base_experience: number;
  height: number;
  weight: number;
  id: number;
  is_default: boolean;

  abilities: AbilitySlot[];
  past_abilities: PastAbility[];
  types: PokemonType[];
  past_types: any[]; // Fill in if needed
  stats: PokemonStat[];

  cries: {
    latest: string;
    legacy: string;
  };

  forms: NamedAPIResource[];
  game_indices: GameIndex[];
  held_items: any[]; // You can define this if needed

  location_area_encounters: string;

  species: NamedAPIResource;

  moves: MoveEntry[];

  sprites: PokemonSprites;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface AbilitySlot {
  ability: NamedAPIResource | null;
  is_hidden: boolean;
  slot: number;
}

export interface PastAbility {
  abilities: AbilitySlot[];
  generation: NamedAPIResource;
}

export interface GameIndex {
  game_index: number;
  version: NamedAPIResource;
}

export interface MoveEntry {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NamedAPIResource;
  order: number | null;
  version_group: NamedAPIResource;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other?: {
    dream_world?: {front_default: string | null; front_female: string | null};
    home?: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    ['official-artwork']?: {front_default: string; front_shiny: string};
    showdown?: any; // You can expand as needed
  };
  versions?: any; // Consider deeply typing if necessary
}

export interface IPokemonDetails {
  pokemonData: PokemonDetailResponse;
  pokemonSpecies?: IPokemonSpeciesModel;
  colorVariant: ColorVariant;
  index?: number;
}
