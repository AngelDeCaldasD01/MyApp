import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import {IPokemon} from '../../api/PokedexStore';
import Toast from 'react-native-toast-message';
import cardStyles from './PokemonCard.styled';
import {getColorByPokemonType} from '../../utils/getColorByPokemonType';
import {TPOKEMON_TYPE_COLORS} from '../../utils/pokemonTypeColors';

export default function PokemonCard(props: IPokemon) {
  const {name, order, imageUrl, types} = props;

  const goToPokemon = () => {
    Toast.show({
      text1: `Pokemon: ${name}`,
      type: 'info',
      autoHide: true,
      visibilityTime: 2000,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View
        style={[
          cardStyles.cardContainer,
          {
            backgroundColor: getColorByPokemonType(
              types[0] as keyof TPOKEMON_TYPE_COLORS,
            ),
          },
        ]}>
        <View style={cardStyles.spacing}>
          <Text style={cardStyles.orderText}>
            #{`${order}`.padStart(3, '0')}
          </Text>
          <Text style={cardStyles.orderText}>{types[0]}</Text>
          {types[1] && <Text style={cardStyles.orderText}>{types[1]}</Text>}
          <Text style={cardStyles.nameText}>{name}</Text>
          {imageUrl && (
            <Image style={cardStyles.cardImage} source={{uri: imageUrl}} />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
