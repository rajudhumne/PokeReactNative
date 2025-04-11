// src/screens/PokemonListScreen.js

import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {useCallback, useEffect} from 'react';
import {ActivityIndicator, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PokemonCard from '../../../components/card/PokemonCard';
import {AppDispatch} from '../../../redux/store';
import {fetchAllPokemons} from '../action/pokemonActions';
import {IPokemonState, pokemonData} from '../slice/PokemonListSlice';
import {PokemonListStyles as styles} from '../styles/pokemonListStyles';

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

  if (pokemonList.loading) {
    <ActivityIndicator size="large" color="#3498db" />;
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search Pokemon" />
      <FlashList
        data={pokemonList.filteredResults}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item}) => (
          <PokemonCard name={item.name} sprite={item.sprite} />
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          pokemonList.loading ? (
            <ActivityIndicator size="large" color="#3498db" />
          ) : null
        }
      />
    </View>
  );
}

export default PokemonListScreen;
