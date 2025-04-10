export interface IPokemonListResponseModel {
  count: number;
  next: string;
  previous: string;
  results: IPokemonSummary[];
}

export interface IPokemonSummary {
  name: string;
  url: string;
}

export enum IPokemonEndpoints {
  list = 'pokemon',
  details = 'pokemon/{id}',
}
