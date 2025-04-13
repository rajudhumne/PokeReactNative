import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {AppDispatch} from '../../../redux/store';
import {
  fetchPokemonDetails,
  fetchPokemonSpecies,
} from '../action/PokemonDetailsActions';

import {PokemonDetailResponse} from '../model/pokemonDetailsModel';
import {IPokemonSpeciesModel} from '../model/PokemonSpeciesModel';

import {getTypeColorPalette} from '../../../assets/colors/colorPalette';
import {PokemonDetailsStyles as styles} from '../styles/PokemonDetailsStyles';

import {AboutPokemon} from '../../../components/about/AboutPokemon';
import DetailsHeader from '../../../components/detailsHeader/DetailsHeader';
import {StatsTab} from '../../../components/stats/StatsTab';
import TabBar from '../../../components/tabBar/TabBar';

export type RootStackParamList = {
  Pokédex: undefined;
  PokemonDetails: {name: string; index: number};
};

type PokemonDetailsRouteProp = RouteProp<RootStackParamList, 'PokemonDetails'>;

const tabs = ['About', 'Base Stats'] as const;
export type TabKey = (typeof tabs)[number];

function PokemonDetails() {
  const route = useRoute<PokemonDetailsRouteProp>();
  const index = route.params?.index ?? '';
  const dispatch = useDispatch<AppDispatch>();

  const [pokemonData, setPokemonData] = useState<PokemonDetailResponse | null>(
    null,
  );
  const [pokemonSpeciesData, setPokemonSpeciesData] =
    useState<IPokemonSpeciesModel | null>(null);
  const [currentTab, setCurrentTab] = useState<TabKey>('About');

  useEffect(() => {
    const name = route.params?.name ?? '';

    const fetchPokemonData = async () => {
      try {
        const details = await dispatch(fetchPokemonDetails(name)).unwrap();
        setPokemonData(details);

        const species = await dispatch(fetchPokemonSpecies(name)).unwrap();
        setPokemonSpeciesData(species);
      } catch (err: any) {
        console.warn('Error fetching Pokémon data:', err.message || err);
      }
    };

    if (name) {
      fetchPokemonData();
    }
  }, [dispatch, route.params?.name]);

  const type = pokemonData?.types?.[0]?.type?.name ?? '';
  const colorVariant = getTypeColorPalette(type);

  const getTabScreen = (tab: TabKey) => {
    switch (tab) {
      case 'About':
        return (
          <AboutPokemon
            pokemonData={pokemonData!}
            pokemonSpecies={pokemonSpeciesData!}
            colorVariant={colorVariant}
          />
        );
      case 'Base Stats':
        return (
          <StatsTab pokemonData={pokemonData!} colorVariant={colorVariant} />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {pokemonData && (
        <>
          <View
            style={[styles.topSection, {backgroundColor: colorVariant.light}]}>
            <DetailsHeader
              pokemonData={pokemonData}
              colorVariant={colorVariant}
              index={index}
            />
          </View>

          <View style={styles.tabContainer}>
            {pokemonSpeciesData && (
              <View style={styles.container}>
                <TabBar
                  tabs={tabs}
                  currentTab={currentTab}
                  onSelect={setCurrentTab}
                  colorVariant={colorVariant}
                />
                <View style={styles.safeArea}>{getTabScreen(currentTab)}</View>
              </View>
            )}
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

export default PokemonDetails;
