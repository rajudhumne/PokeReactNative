import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors/colorPalette';

export const SearchBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginBlock: 15,
    height: 60,
    backgroundColor: colors.white,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    padding: 10,
    height: 40,
    width: 40,
    resizeMode: 'stretch',
  },
  textInput: {
    color: colors.text,
    height: '100%',
    width: '90%',
  },
});
