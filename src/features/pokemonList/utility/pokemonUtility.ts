import {baseUrl} from '../../../services/config';
import {IPokemonEndpoints} from '../model/pokemonModel';

export function getPokemonListEndPoint(
  apiType: IPokemonEndpoints,
  name: string,
) {
  switch (apiType) {
    case IPokemonEndpoints.list:
      return `${baseUrl}/pokemon`;
    case IPokemonEndpoints.details:
      return `${baseUrl}/pokemon/${name}`;
    case IPokemonEndpoints.species:
      return `${baseUrl}/pokemon-species/${name}`;
    default:
      return '';
  }
}
