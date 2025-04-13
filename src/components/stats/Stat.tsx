import React from 'react';
import {DimensionValue, Text, View} from 'react-native';

import {StatsTabStyles as styles} from './StatsTabStyles';
import {colors} from '../../assets/colorPalette/colorPalette';

type StatProps = {
  name: string;
  baseStat: number;
  percetange: number;
};

export const Stat = ({name, baseStat, percetange}: StatProps) => {
  const statisticName = (name: string): string => {
    switch (name) {
      case 'special-attack':
        return 'Sp. Attack';
      case 'special-defense':
        return 'Sp. Defense';
      default:
        return name;
    }
  };
  const width = ((baseStat * 100) / percetange + '%') as DimensionValue;
  const backgroundColor = baseStat < 75 ? colors.red : colors.green;

  return (
    <View style={styles.stat}>
      <Text style={styles.title}>{statisticName(name)}:</Text>
      <View style={styles.progressWrap}>
        <View
          style={{
            ...styles.progress,
            backgroundColor,
            width,
          }}
        />
      </View>
      <Text style={styles.statNumber}>{baseStat}</Text>
    </View>
  );
};
