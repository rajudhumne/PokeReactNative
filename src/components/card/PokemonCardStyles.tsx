import {StyleSheet} from 'react-native';

export const PokemonCardStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 4,
  },
  cardName: {
    fontSize: 16,
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
