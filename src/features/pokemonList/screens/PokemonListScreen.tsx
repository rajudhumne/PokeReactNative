// src/screens/PokemonListScreen.js

import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PokemonCard from '../../../components/card/PokemonCard';
import {AppDispatch} from '../../../redux/store';
import {fetchAllPokemons} from '../action/pokemonActions';
import {IPokemonState, pokemonData} from '../slice/PokemonListSlice';

function PokemonListScreen() {
  // const flatListRef = useRef<FlatList>(null);
  const pokemonList: IPokemonState = useSelector(pokemonData);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  useEffect(() => {
    // Fetching User from API
    if (pokemonList.results.length === 0) {
      dispatch(fetchAllPokemons());
    }
  }, [dispatch, pokemonList]);

  const handleLoadMore = () => {
    dispatch(fetchAllPokemons(pokemonList.next));
  };

  const handleEdit = useCallback(
    (url: string = '') => {
      navigation.navigate('PokemonDetails', {url});
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search Pokemon" />
      <Pressable onPress={() => handleEdit(pokemonList.next)} />

      <FlatList
        data={pokemonList.filteredResults}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item}) => <PokemonCard name={item.name} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
const styles = StyleSheet.create({
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
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
  },

  touchableFeedbackStyle: {
    flex: 1,
  },
});

export default PokemonListScreen;
