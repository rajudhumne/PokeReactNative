import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import PokemonDetails, {
  RootStackParamList,
} from '../features/pokemonDetails/screen/PokemonDetails';
import PokemonListScreen from '../features/pokemonList/screens/PokemonListScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationHandler = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Pokédex"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#17171B',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}>
        <Stack.Screen name="Pokédex" component={PokemonListScreen} />
        <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationHandler;
