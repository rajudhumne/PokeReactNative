import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colorPalette/colorPalette';

export const StatsTabStyles = StyleSheet.create({
  statsTabContainer: {
    paddingVertical: 25,
    marginTop: 10,
  },
  stat: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },
  title: {
    width: 90,
    color: colors.gray,
    textTransform: 'capitalize',
  },
  progressWrap: {
    flexGrow: 1,
    height: 5,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
    borderRadius: 5,
  },
  progress: {
    height: 5,
  },
  statNumber: {
    width: 35,
    textAlign: 'right',
  },
  statText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 15,
  },
});
