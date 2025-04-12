import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../../redux/store';
import {
  fetchPokemonDetails,
  fetchPokemonSpecies,
} from '../action/pokemonDetailsActions';
import {
  IPokemonDetailsState,
  onPokemonDetailLoad,
} from '../slice/pokemonDetailsSlice';
import {PokemonDetailsStyles as styles} from '../styles/PokemonDetailsStyles';

export type RootStackParamList = {
  Pokédex: undefined;
  PokemonDetails: {id: number};
};

type PokemonDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'PokemonDetails'
>;

function PokemonDetails({route}: PokemonDetailsProps) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Fetching User from API
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.profileCard} />
      <Text>{route.params.id}</Text>
    </View>
  );
}

export default PokemonDetails;
