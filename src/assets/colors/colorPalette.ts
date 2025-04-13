export type ColorVariant = {
  main: string;
  light: string;
  dark: string;
  text: string;
};

const typeColorPalette: Record<string, ColorVariant> = {
  normal: {main: '#A8A77A', light: '#C8C6A0', dark: '#888756', text: '#fff'},
  fire: {main: '#EE8130', light: '#FF9C5B', dark: '#B9581A', text: '#fff'},
  water: {main: '#6390F0', light: '#83A9F6', dark: '#3A64B7', text: '#fff'},
  electric: {main: '#F7D02C', light: '#FBE570', dark: '#C1A300', text: '#000'},
  grass: {main: '#96BD8F', light: '#B1D4AA', dark: '#729D6B', text: '#fff'},
  ice: {main: '#96D9D6', light: '#C4F2F0', dark: '#5DB1AD', text: '#000'},
  fighting: {main: '#C22E28', light: '#E25A54', dark: '#941E1A', text: '#fff'},
  poison: {main: '#A33EA1', light: '#C46DC3', dark: '#762C73', text: '#fff'},
  ground: {main: '#E2BF65', light: '#F1D98E', dark: '#B59736', text: '#fff'},
  flying: {main: '#A98FF3', light: '#C5B6FA', dark: '#7C66B6', text: '#fff'},
  psychic: {main: '#F95587', light: '#FC82A8', dark: '#C3205A', text: '#fff'},
  bug: {main: '#A6B91A', light: '#C7D83E', dark: '#7F8C14', text: '#000'},
  rock: {main: '#B6A136', light: '#D4BF5F', dark: '#8E7A20', text: '#fff'},
  ghost: {main: '#735797', light: '#9475B8', dark: '#513A6B', text: '#fff'},
  dragon: {main: '#6F35FC', light: '#996CFF', dark: '#4D1DC2', text: '#fff'},
  dark: {main: '#705746', light: '#947A69', dark: '#4D3A2E', text: '#fff'},
  steel: {main: '#B7B7CE', light: '#D3D3E6', dark: '#8E8EAC', text: '#000'},
  fairy: {main: '#D685AD', light: '#F1AFCB', dark: '#A85C86', text: '#000'},
};

export function getTypeColorPalette(type: string): ColorVariant {
  return (
    typeColorPalette[type.toLowerCase()] ?? {
      main: '#ccc',
      light: '#e0e0e0',
      dark: '#999',
      text: '#000',
    }
  );
}

export const colors = {
  red: '#fc6c6d',
  green: '#4caf50',
  gray: '#999',
  tabIndicator: '#ccc',
  white: '#fff',
  backgroundWhite: '#f2f4f7',
  text: '#1A1A1A',
  bug: '#8CB230',
};
