import {ActivityIndicator, View} from 'react-native';

import {colors} from '../../../../assets/colors/colorPalette';
import {AppLoaderStyles as styles} from '../styles/AppLoaderStyles';

function StaticAppLoader() {
  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.green} />
      </View>
    </View>
  );
}

export default StaticAppLoader;
