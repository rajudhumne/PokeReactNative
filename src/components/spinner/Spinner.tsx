import {ActivityIndicator, View} from 'react-native';
import {colors} from '../assets/colors/colors';

function Spinner() {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator color={colors.bug} size="large" />
    </View>
  );
}
export default Spinner;
