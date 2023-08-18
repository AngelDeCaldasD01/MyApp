import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IPokemon} from '../../api/PokedexStore';
import cardStyles from './PokemonHeader.styled';
import {getColorByPokemonType} from '../../utils/getColorByPokemonType';
import {TPOKEMON_TYPE_COLORS} from '../../utils/pokemonTypeColors';
import pokemonHeaderStyles from './PokemonHeader.styled';

export default function PokemonHeader(props: IPokemon) {
  const {name, order, imageUrl, types} = props;
  console.log(getColorByPokemonType(types[0] as keyof TPOKEMON_TYPE_COLORS));
  return (
    <>
      <View
        style={[
          pokemonHeaderStyles.bg,
          {
            backgroundColor: getColorByPokemonType(
              types[0] as keyof TPOKEMON_TYPE_COLORS,
            ),
          },
        ]}
      />

      <SafeAreaView style={pokemonHeaderStyles.content}>
        <View style={pokemonHeaderStyles.header}>
          <Text style={pokemonHeaderStyles.name}>{name}</Text>
          <Text style={pokemonHeaderStyles.order}>
            #{`${order}`.padStart(3, 0)}
          </Text>
        </View>
        {imageUrl && (
          <View style={pokemonHeaderStyles.contentImg}>
            <FastImage
              style={cardStyles.image}
              source={{uri: imageUrl}}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        )}
      </SafeAreaView>
    </>
  );
}
