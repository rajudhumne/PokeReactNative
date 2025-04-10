import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import PokemonDetails from '../features/pokemonList/screens/PokemonDetails';
import PokemonListScreen from '../features/pokemonList/screens/PokemonListScreen';

const Stack = createNativeStackNavigator();

const NavigationHandler = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Pokemon List"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1A1A1A',
          },
          headerTintColor: '#FFD700',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}>
        <Stack.Screen name="Pokemon List" component={PokemonListScreen} />
        <Stack.Screen name="Pokemon Details" component={PokemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationHandler;
