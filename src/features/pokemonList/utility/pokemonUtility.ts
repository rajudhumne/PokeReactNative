import {baseUrl} from '../../../services/config';
import {IPokemonEndpoints} from '../model/pokemonModel';

export function getPokemonListEndPoint(apiType: IPokemonEndpoints) {
  switch (apiType) {
    case IPokemonEndpoints.list:
      return `${baseUrl}/pokemon`;
    // Add other end points of this feature...
    default:
      return '';
  }
}
