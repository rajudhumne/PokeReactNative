import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {TabBarStyles as styles} from './TabBarStyles';
import {TabKey} from '../../features/pokemonDetails/screen/PokemonDetails';
import {ColorVariant} from '../../assets/colorPalette/colorPalette';

interface ITabBar {
  tabs: readonly TabKey[];
  currentTab: string;
  onSelect: (tab: TabKey) => void;
  colorVariant: ColorVariant;
}

function TabBar(props: ITabBar) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {props.tabs.map(item => {
          const isSelected = item === props.currentTab;
          return (
            <View style={styles.tabs} key={item}>
              <Pressable
                onPress={() => {
                  if (!isSelected) {
                    props.onSelect(item);
                  }
                }}>
                <Text
                  style={[
                    styles.text,
                    isSelected
                      ? [styles.selectedText, {color: props.colorVariant.main}]
                      : undefined,
                  ]}>
                  {item}
                </Text>
              </Pressable>
              {/* <View
                style={[
                  styles.currentTabLine,
                  isSelected ? {backgroundColor: props.tabColor} : {height: 0},
                ]}
              /> */}
            </View>
          );
        })}
      </View>
      <View
        style={[styles.line, {backgroundColor: props.colorVariant.light}]}
      />
    </View>
  );
}

export default TabBar;
