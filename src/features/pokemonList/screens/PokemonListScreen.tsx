import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
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
  const pokemonList: IPokemonState = useSelector(pokemonData);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchAllPokemons());
  }, [dispatch]);

  const handleLoadMore = () => {
    console.log('HandleLoadMore fucntions called');
    if (searchText || pokemonList.results.length === 0) {
      return;
    }
    dispatch(fetchAllPokemons(pokemonList.next));
  };

  const handleTextInputChange = (query: string) => {
    setSearchText(query);
    dispatch(setSearchQuery(query));
  };

  const handleNavigation = useCallback(
    (name: string = '', index: number = 999) => {
      navigation.navigate('PokemonDetails', {name, index});
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
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item, index}) => (
          <PokemonCard
            name={item.name}
            sprite={item.sprite}
            index={index}
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
