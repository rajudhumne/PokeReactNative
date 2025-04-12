import {Image, Pressable, Text, View} from 'react-native';
import {PokemonCardStyles as styles} from './PokemonCardStyles';

interface IPokemonCardProps {
  name: string;
  sprite: string;
  index: number;
  onTap: (id: number) => void;
}

function PokemonCard({name, sprite, index, onTap}: IPokemonCardProps) {
  return (
    <Pressable
      onPress={() => {
        onTap(index + 1);
      }}>
      <View style={styles.card}>
        <Image source={{uri: sprite}} style={styles.cardImage} />
        <View>
          <Text style={styles.cardNumber}>#{index + 1}</Text>
          <Text style={styles.cardName}>{name.toUpperCase()}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default PokemonCard;
