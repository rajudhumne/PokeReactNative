export default function replacePokemonIdWithName(
  url: string,
  name: string,
): string {
  return url && name
    ? url.replace(/\/\d+\/?$/, `/${name.toLowerCase()}/`)
    : url;
}
