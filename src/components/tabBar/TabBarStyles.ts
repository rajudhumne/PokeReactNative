import {StyleSheet} from 'react-native';

export const TabBarStyles = StyleSheet.create({
  container: {zIndex: -1},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#A9A9A9',
    textAlign: 'center',
  },
  selectedText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  tabs: {
    alignItems: 'center',
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#A9A9A9',
    alignSelf: 'center',
    marginTop: 20,
  },
  currentTabLine: {
    height: 1,
    width: 100,
    backgroundColor: '#8E8EAC',
    marginTop: 10,
  },
});
