import {Platform, StyleSheet} from 'react-native';
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
    padding: 10,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    padding: 10,
    height: Platform.OS === 'android' ? 20 : 40,
    width: Platform.OS === 'android' ? 20 : 40,
    resizeMode: 'stretch',
    marginRight: 10,
  },
  textInput: {
    color: colors.text,
    height: '100%',
    width: '90%',
  },
});
