type ApiConfig = {
  apiVersion: string; // Version of the API (e.g., "v2")
  baseUrl: string; // Base URL for API calls
};

// Define the structure of the entire configuration object.
// It includes specific configurations for "development" and "production" environments.
type Config = {
  development: ApiConfig; // Configuration for development environment
  production: ApiConfig; // Configuration for production environment
};

// Configuration object containing API details for different environments.
const config: Config = {
  development: {
    apiVersion: 'v2', // API version for development
    baseUrl: 'https://pokeapi.co/api', // Base URL for development
  },
  production: {
    apiVersion: 'v2', // API version for production
    baseUrl: 'https://pokeapi.co/api', // Base URL for production
  },
};

// Get the current environment from the `process.env.NODE_ENV` variable.
// Default to "development" if the environment is not set.
const env = (process.env.NODE_ENV as keyof Config) || 'development';

// Select the configuration for the current environment.
const currentConfig: ApiConfig = config[env];

// Construct and export the full base URL dynamically, appending the API version.
export const baseUrl: string = `${currentConfig.baseUrl}/${currentConfig.apiVersion}`;

// Export the Pokémon sprite URL, which remains constant.
export const pokemonSprite: string =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
