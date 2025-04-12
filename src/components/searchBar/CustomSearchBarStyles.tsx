import {StyleSheet} from 'react-native';
import {textColor} from '../../assets/colors/colors';

export const SearchBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginBlock: 15,
    height: 60,
    backgroundColor: textColor.white,
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
    height: '100%',
    width: '90%',
  },
});
