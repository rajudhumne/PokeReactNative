import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors/colorPalette';

export const AboutPokemonStyles = StyleSheet.create({
  container: {
    paddingVertical: 25,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
  },
  statText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 15,
    marginBottom: 15,
  },
  falvorText: {
    marginBottom: 10,
    color: colors.text,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    minWidth: 110,
    color: colors.gray,
  },
  value: {
    color: colors.text,
  },
});
