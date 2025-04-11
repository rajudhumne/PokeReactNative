import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
      <Text>{route.params.url}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
});

export default PokemonDetails;
