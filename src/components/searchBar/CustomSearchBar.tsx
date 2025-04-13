import {Image, TextInput, View} from 'react-native';
import {colors} from '../../assets/colors/colorPalette';
import RESOURCES from '../../assets/utility/resourceManager';
import {SearchBarStyles as styles} from './CustomSearchBarStyles';

interface ISearchBarProps {
  placeholder: string;
  onChangeText: (value: string) => void;
  value: string | undefined;
}

function CustomSearchBar({placeholder, onChangeText, value}: ISearchBarProps) {
  console.log('Custome Search Bar');
  console.log(colors.gray);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={RESOURCES.commonImages.searchIcon} />
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
