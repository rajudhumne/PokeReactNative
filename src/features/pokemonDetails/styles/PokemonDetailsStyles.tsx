import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors/colorPalette';

export const PokemonDetailsStyles = StyleSheet.create({
  safeArea: {flex: 1, overflow: 'hidden'},
  container: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
    overflow: 'hidden',
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  topSection: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  tabContainer: {
    padding: 12,
    paddingHorizontal: 20,
    flex: 1,
    top: -50,
    backgroundColor: colors.backgroundWhite,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    zIndex: 1,
  },
});
