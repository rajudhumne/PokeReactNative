interface NamedAPIResource {
  name: string;
  url: string;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: NamedAPIResource;
  version: NamedAPIResource;
}

interface FormDescription {
  description: string;
  language: NamedAPIResource;
}

interface GenusEntry {
  genus: string;
  language: NamedAPIResource;
}

interface NameEntry {
  name: string;
  language: NamedAPIResource;
}

interface PokedexNumber {
  entry_number: number;
  pokedex: NamedAPIResource;
}

interface Variety {
  is_default: boolean;
  pokemon: NamedAPIResource;
}

export interface IPokemonSpeciesModel {
  base_happiness: number;
  capture_rate: number;
  color: NamedAPIResource;
  egg_groups: NamedAPIResource[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: NamedAPIResource;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: FormDescription[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: GenusEntry[];
  generation: NamedAPIResource;
  growth_rate: NamedAPIResource;
  habitat: NamedAPIResource | null;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: NameEntry[];
  order: number;
  pal_park_encounters: any[]; // Could define this if needed
  pokedex_numbers: PokedexNumber[];
  shape: NamedAPIResource;
  varieties: Variety[];
}
