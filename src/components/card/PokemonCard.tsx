import {Text, View} from 'react-native';

interface IPokemonCardProps {
  name: string;
}

function PokemonCard({name}: IPokemonCardProps) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

export default PokemonCard;
