import {Image, Pressable, Text, View} from 'react-native';
import getPokemonIdFromUrl from '../../util/getPokemonIdFromUrl';
import {PokemonCardStyles as styles} from './PokemonCardStyles';

interface IPokemonCardProps {
  name: string;
  url: string;
  sprite: string;
  onTap: (id: number) => void;
}

function PokemonCard({name, sprite, url, onTap}: IPokemonCardProps) {
  const id = getPokemonIdFromUrl(url);
  return (
    <Pressable
      onPress={() => {
        onTap(+id);
      }}>
      <View style={styles.card}>
        <Image source={{uri: sprite}} style={styles.cardImage} />
        <View>
          <Text style={styles.cardNumber}>#0{id}</Text>
          <Text style={styles.cardName}>{name.toUpperCase()}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default PokemonCard;
