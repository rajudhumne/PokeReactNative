import {baseUrl} from '../../../services/config';
import {IPokemonEndpoints} from '../model/pokemonModel';

export function getPokemonListEndPoint(
  apiType: IPokemonEndpoints,
  id?: number,
) {
  switch (apiType) {
    case IPokemonEndpoints.list:
      return `${baseUrl}/pokemon`;
    case IPokemonEndpoints.details:
      return `${baseUrl}/pokemon/${id}`;
    case IPokemonEndpoints.species:
      return `${baseUrl}/pokemon-species/${id}`;
    default:
      return '';
  }
}
