export default function getPokemonIdFromUrl(url: string): string {
  if (!url) return getRandomIdAsString(); // Radom
  const parts = url.split('/').filter(Boolean); // removes empty strings
  return parts[parts.length - 1]; // last part is the ID
}

function getRandomIdAsString(): string {
  const randomNumber = Math.floor(Math.random() * 100); // 0 to 99
  return randomNumber.toString();
}
