import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors/colorPalette';

export const PokemonListStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: colors.white,
  },
  listContainer: {
    padding: 10,
    backgroundColor: 'white',
    height: '100%',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  searchInput: {
    height: 30,
  },
});
