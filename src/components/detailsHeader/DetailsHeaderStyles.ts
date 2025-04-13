import {StyleSheet} from 'react-native';

export const DetailsHeaderStyles = StyleSheet.create({
  container: {width: '100%', borderRadius: 16},
  headerContainer: {
    height: 330,
    width: '100%',
  },
  details: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {width: 30, height: 30, marginTop: 10},
  icon: {width: '100%', height: '100%'},

  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  types: {flexDirection: 'row', gap: 5, marginTop: 10},
  typeContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  indexContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 30,
  },
  typeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  indexText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  backgroundPatternIcon: {
    position: 'absolute',
    height: 100,
    width: 100,
    zIndex: 1,
    right: 100,
  },
  backgroundPatternIcon1: {
    position: 'absolute',
    alignSelf: 'flex-end',
    height: 100,
    width: 100,
    left: -50,
    bottom: 70,
  },
  pokemonIcon: {
    width: 200,
    height: 200,
    backgroundColor: 'transparent',
  },
  pokemonCircleIcon: {
    position: 'absolute',
    width: 150,
    height: 150,

    left: 50,
    transform: [{rotate: '-90deg'}],
  },
  pokemonIconContainer: {
    alignSelf: 'center',
    bottom: 10,
    position: 'absolute',
    zIndex: 2,
  },
});
