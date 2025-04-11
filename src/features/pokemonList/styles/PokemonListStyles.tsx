import {StyleSheet} from 'react-native';

export const PokemonListStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  listContainer: {
    padding: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  searchInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 16,
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#f7f7f7',
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});
