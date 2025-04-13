import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {colors} from '../assets/colors/colorPalette';
import PokemonDetails, {
  RootStackParamList,
} from '../features/pokemonDetails/screen/PokemonDetails';
import PokemonListScreen from '../features/pokemonList/screens/PokemonListScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * NavigationHandler Component
 *
 * This component manages the app's navigation stack using React Navigation.
 * It defines the navigation container and stack screens for the Pokédex application.
 */
const NavigationHandler = () => {
  return (
    <NavigationContainer>
      {/* Stack Navigator: Manages navigation between screens */}
      <Stack.Navigator
        initialRouteName="Pokédex"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}>
        {/* Define the main screen (Pokédex) */}
        <Stack.Screen name="Pokédex" component={PokemonListScreen} />
        {/* Define the details screen with a hidden header */}
        <Stack.Screen
          name="PokemonDetails"
          component={PokemonDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationHandler;
