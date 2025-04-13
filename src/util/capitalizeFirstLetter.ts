export default function capitalizeFirstLetter(input: string): string {
  return input
    .trim() // Remove leading/trailing spaces
    .replace(/\s+/g, ' ') // Replace 2+ spaces with 1 space
    .toLowerCase() // Make everything lowercase first
    .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize first letter of each word
}
