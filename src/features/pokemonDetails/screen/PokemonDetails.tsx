import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {PokemonDetailsStyles as styles} from '../styles/PokemonDetailsStyles';

export type RootStackParamList = {
  Pokédex: undefined;
  PokemonDetails: {url: string};
};

type PokemonDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'PokemonDetails'
>;

function PokemonDetails({route}: PokemonDetailsProps) {
  console.log(route.params);
  return (
    <View style={styles.container}>
      <View style={styles.profileCard} />
      <Text>{route.params.url}</Text>
    </View>
  );
}

export default PokemonDetails;
