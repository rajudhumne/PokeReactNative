import {Image, Text, View} from 'react-native';
import {PokemonCardStyles as styles} from './PokemonCardStyles';

interface IPokemonCardProps {
  name: string;
  sprite: string;
}

function PokemonCard({name, sprite}: IPokemonCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{uri: sprite}} style={styles.cardImage} />
      <Text style={styles.cardName}>{name.toUpperCase()}</Text>
    </View>
  );
}

export default PokemonCard;
