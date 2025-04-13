import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

import RESOURCES from '../../assets/utility/resourceManager';
import {IPokemonDetails} from '../../features/pokemonDetails/model/pokemonDetailsModel';
import {DetailsHeaderStyles as styles} from './DetailsHeaderStyles';

import {getTypeColorPalette} from '../../assets/colors/colorPalette';
import capitalizeFirstLetter from '../../util/capitalizeFirstLetter';

function DetailsHeader({
  pokemonData,
  colorVariant,
  index = 999,
}: IPokemonDetails) {
  const navigation = useNavigation();
  const types = (pokemonData?.types ?? []).slice(0, 2);
  const handleBackClick = async () => {
    navigation.goBack();
  };
  const imgUrl =
    pokemonData?.sprites?.other?.['official-artwork']?.front_default ?? '';

  const indexColor = getTypeColorPalette(types[0]?.type?.name ?? '');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          resizeMode="contain"
          source={RESOURCES.commonImages.backgroundPattern}
          style={styles.backgroundPatternIcon}
        />
        <Image
          resizeMode="contain"
          source={RESOURCES.commonImages.backgroundPattern}
          style={styles.backgroundPatternIcon1}
        />
        <Pressable style={styles.iconContainer} onPress={handleBackClick}>
          <Image
            source={RESOURCES.commonImages.arrow}
            tintColor={colorVariant.main === '#ccc' ? '#000' : '#FFF'}
            resizeMode="contain"
            style={styles.icon}
          />
        </Pressable>
        <View style={styles.details}>
          <View>
            <Text style={[styles.nameText, {color: colorVariant.text}]}>
              {capitalizeFirstLetter(pokemonData?.name ?? '')}
            </Text>
            <View style={styles.types}>
              {types.map(item => {
                const color = getTypeColorPalette(item?.type?.name ?? '');

                return (
                  <View
                    key={item?.type?.name}
                    style={[
                      styles.typeContainer,
                      {backgroundColor: color.dark},
                    ]}>
                    <Text style={[styles.typeText, {color: color.text}]}>
                      {capitalizeFirstLetter(item?.type?.name ?? '')}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View
            style={[styles.indexContainer, {backgroundColor: indexColor.dark}]}>
            <Text style={[styles.indexText, {color: indexColor.text}]}>
              {`#0${index}`}
            </Text>
          </View>
        </View>
        <View style={styles.pokemonIconContainer}>
          <Image
            source={{uri: imgUrl}}
            resizeMode="contain"
            style={styles.pokemonIcon}
          />
          <Image
            source={RESOURCES.commonImages.pokemonCircle}
            resizeMode="contain"
            style={styles.pokemonCircleIcon}
          />
        </View>
      </View>
    </View>
  );
}

export default DetailsHeader;
