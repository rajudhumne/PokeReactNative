import React from 'react';
import {Text, View} from 'react-native';

import {Stat} from './Stat';
import {IPokemonDetails} from '../../features/pokemonDetails/model/pokemonDetailsModel';
import {StatsTabStyles as styles} from './StatsTabStyles';

export const StatsTab = (props: IPokemonDetails) => {
  const stats = props.pokemonData.stats;
  const total = stats.reduce((prev, curr) => prev + curr.base_stat, 0) || 0;

  return (
    <View style={styles.statsTabContainer}>
      <Text style={[styles.statText, {color: props.colorVariant.main}]}>
        Stats
      </Text>
      {stats.map(({stat, base_stat}) => (
        <Stat
          key={stat.name}
          name={stat.name}
          baseStat={base_stat}
          percetange={150}
        />
      ))}
      <Stat name="Total" baseStat={total} percetange={1000} />
    </View>
  );
};
