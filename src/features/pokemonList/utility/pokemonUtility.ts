import {baseUrl} from '../../../services/config';
import {IPokemonEndpoints} from '../model/pokemonModel';
/**
 * Constructs the full API endpoint URL for Pokémon-related data.
 *
 * @param {IPokemonEndpoints} apiType - The type of Pokémon API endpoint (list, details, or species).
 * @param {string} name - The Pokémon name or identifier (used for details and species endpoints).
 * @returns {string} - The constructed URL for the requested Pokémon API endpoint.
 *
 * This function centralizes endpoint generation to ensure consistency and reusability across the app.
 */
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
