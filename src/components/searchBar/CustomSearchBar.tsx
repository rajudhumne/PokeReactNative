import {Image, TextInput, View} from 'react-native';
import {colors} from '../../assets/colors/colorPalette';
import {SearchBarStyles as styles} from './CustomSearchBarStyles';

interface ISearchBarProps {
  placeholder: string;
  onChangeText: (value: string) => void;
  value: string | undefined;
}

function CustomSearchBar({placeholder, onChangeText, value}: ISearchBarProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/searchIcon.png')}
      />
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor={colors.gray}
        value={value}
        onChangeText={query => onChangeText(query)}
      />
    </View>
  );
}

export default CustomSearchBar;
