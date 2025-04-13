import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../../assets/colors/colorPalette';
import PokemonCard from '../../../components/card/PokemonCard';
import CustomSearchBar from '../../../components/searchBar/CustomSearchBar';
import Spinner from '../../../components/spinner/Spinner';
import {AppDispatch} from '../../../redux/store';
import {fetchAllPokemons} from '../action/pokemonActions';
import {
  IPokemonState,
  pokemonData,
  setSearchQuery,
} from '../slice/PokemonListSlice';
import {PokemonListStyles as styles} from '../styles/PokemonListStyles';

function PokemonListScreen() {
  // Redux state and dispatch setup
  const pokemonList: IPokemonState = useSelector(pokemonData);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  // Local state for search text
  const [searchText, setSearchText] = useState('');

  // Fetch Pokémon list on component mount
  useEffect(() => {
    dispatch(fetchAllPokemons());
  }, [dispatch]);

  /**
   * Handles loading more Pokémon when user scrolls to the bottom of the list.
   * Prevents further fetching if search text is present or results are empty.
   */
  const handleLoadMore = () => {
    if (searchText || pokemonList.results.length === 0) {
      return; // Do not load more if searching or no results available
    }
    dispatch(fetchAllPokemons(pokemonList.next)); // Fetch next page of results
  };

  /**
   * Updates the search text and filters Pokémon results.
   * @param {string} query - The search query entered by the user.
   */
  const handleTextInputChange = (query: string) => {
    setSearchText(query); // Update local state
    dispatch(setSearchQuery(query)); // Update Redux state
  };
  /**
   * Handles navigation to the Pokémon details screen.
   * @param {string} name - The name of the selected Pokémon.
   * @param {number} index - The index of the selected Pokémon.
   */
  const handleNavigation = useCallback(
    (name: string = '', index: number = 999) => {
      navigation.navigate('PokemonDetails', {name, index});
    },
    [navigation],
  );

  if (pokemonList.loading) {
    <ActivityIndicator size="large" color={colors.green} />;
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
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.name + index}
        estimatedItemSize={120}
        refreshing={pokemonList.loading}
        renderItem={({item}) => (
          <PokemonCard
            name={item.name}
            sprite={item.sprite}
            url={item.url}
            onTap={id => handleNavigation(item.name, id)}
          />
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.4}
        ListFooterComponent={pokemonList.loading ? <Spinner /> : <></>}
      />
    </View>
  );
}

export default PokemonListScreen;
