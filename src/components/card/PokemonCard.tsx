import {Image, Pressable, Text, View} from 'react-native';
import {PokemonCardStyles as styles} from './PokemonCardStyles';

interface IPokemonCardProps {
  name: string;
  url: string;
  sprite: string;
  onTap: (url: string) => void;
}

function PokemonCard({name, sprite, url, onTap}: IPokemonCardProps) {
  return (
    <Pressable
      onPress={() => {
        onTap(url);
      }}>
      <View style={styles.card}>
        <Image source={{uri: sprite}} style={styles.cardImage} />
        <Text style={styles.cardName}>{name.toUpperCase()}</Text>
      </View>
    </Pressable>
  );
}

export default PokemonCard;
