// src/screens/PokemonListScreen.js
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../../redux/store';
import {fetchAllPokemons} from '../action/pokemonActions';
import {IPokemonListResponseModel} from '../model/pokemonModel';
import {pokemonData} from '../slice/PokemonListSlice';

function PokemonListScreen() {
  const flatListRef = useRef<FlatList>(null);
  const pokemonList: IPokemonListResponseModel = useSelector(pokemonData);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  useEffect(() => {
    // Fetching User from API
    if (pokemonList.results.length === 0) {
      dispatch(fetchAllPokemons());
    }
  }, [dispatch, pokemonList]);

  return (
    <View style={styles.container}>
      <Text>Pokemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  pokemonCard: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default PokemonListScreen;
