import {Text, View} from 'react-native';
import {PokemonCardStyles as styles} from './PokemonCardStyles';

interface IPokemonCardProps {
  name: string;
}

function PokemonCard({name}: IPokemonCardProps) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
}

export default PokemonCard;
