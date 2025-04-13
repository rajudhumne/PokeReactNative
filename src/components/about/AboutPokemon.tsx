import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {IPokemonDetails} from '../../features/pokemonDetails/model/pokemonDetailsModel';
import capitalizeFirstLetter from '../../util/capitalizeFirstLetter';
import removeLineBreaks from '../../util/removeLineBreaks';
import {calculateHeight, calculateWeight} from '../../util/unitConverter';
import {AboutPokemonStyles as styles} from './AboutPokemonStyles';

export const AboutPokemon = ({
  pokemonData,
  pokemonSpecies,
  colorVariant,
}: IPokemonDetails) => {
  const {feet, cm} = useMemo(
    () => calculateHeight(pokemonData?.height),
    [pokemonData?.height],
  );
  const {lbs, kg} = useMemo(
    () => calculateWeight(pokemonData?.weight),
    [pokemonData?.weight],
  );
  const abilities = useMemo(
    () => pokemonData?.abilities.map(({ability}) => ability?.name).join(', '),
    [pokemonData?.abilities],
  );
  const eggGroups = useMemo(
    () => (pokemonSpecies?.egg_groups ?? [])?.map(({name}) => name).join(', '),
    [pokemonSpecies?.egg_groups],
  );
  const flavorText = useMemo(
    () =>
      (pokemonSpecies?.flavor_text_entries ?? []).filter(
        item => item.language.name == 'en',
      )?.[0]?.flavor_text ?? '',
    [pokemonSpecies?.flavor_text_entries],
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.descriptionText, {color: colorVariant.main}]}>
        Description
      </Text>
      <Text style={styles.falvorText}>{removeLineBreaks(flavorText)}</Text>
      <Text style={[styles.statText, {color: colorVariant.main}]}>
        Attributes
      </Text>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Weight:</Text>
        <Text style={styles.value}>
          {lbs} {kg}
        </Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Height:</Text>
        <Text style={styles.value}>
          {feet} {cm}
        </Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Habitat:</Text>
        <Text style={styles.value}>
          {capitalizeFirstLetter(pokemonSpecies?.habitat?.name ?? '')}
        </Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Abilities:</Text>
        <Text style={styles.value}>{capitalizeFirstLetter(abilities)}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Egg Groups:</Text>
        <Text style={styles.value}>{capitalizeFirstLetter(eggGroups)}</Text>
      </View>
    </View>
  );
};
