import {StyleSheet} from 'react-native';

export const SearchBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginBlock: 15,
    height: 60,
    backgroundColor: '#F2F2F2',
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
    backgroundColor: '#F2F2F2',
    color: '#424242',
  },
});
