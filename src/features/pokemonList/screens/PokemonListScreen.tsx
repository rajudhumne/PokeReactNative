import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PokemonCard from '../../../components/card/PokemonCard';
import CustomSearchBar from '../../../components/searchBar/CustomSearchBar';
import {AppDispatch} from '../../../redux/store';
import {fetchAllPokemons} from '../action/pokemonActions';
import {
  IPokemonState,
  pokemonData,
  setSearchQuery,
} from '../slice/PokemonListSlice';
import {PokemonListStyles as styles} from '../styles/pokemonListStyles';

function PokemonListScreen() {
  const pokemonList: IPokemonState = useSelector(pokemonData);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  useEffect(() => {
    // Fetching User from API
    if (pokemonList.results.length === 0) {
      dispatch(fetchAllPokemons());
    }
  }, [dispatch, pokemonList]);

  const handleLoadMore = () => {
    console.log('HandleLoadMore fucntions called');
    if (searchText) {
      return;
    }
    dispatch(fetchAllPokemons(pokemonList.next));
  };

  const handleTextInputChange = (query: string) => {
    setSearchText(query);
    dispatch(setSearchQuery(query));
  };

  const handleNavigation = useCallback(
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
      <CustomSearchBar
        placeholder="What Pokémon are you looking for?"
        value={searchText}
        onChangeText={handleTextInputChange}
      />
      <FlashList
        data={pokemonList.filteredResults}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item}) => (
          <PokemonCard
            name={item.name}
            sprite={item.sprite}
            url={item.url}
            onTap={url => handleNavigation(url)}
          />
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
