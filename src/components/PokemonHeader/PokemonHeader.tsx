import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IPokemon} from '../../api/PokedexStore';
import cardStyles from './PokemonHeader.styled';
import {getColorByPokemonType} from '../../utils/getColorByPokemonType';
import {TPOKEMON_TYPE_COLORS} from '../../utils/pokemonTypeColors';
import pokemonHeaderStyles from './PokemonHeader.styled';
import {useCapitalizeFirstLetter} from '../../utils/useCapitalizeFirstLetter';

export default function PokemonHeader(props: IPokemon) {
  const {name, order, imageUrl, types} = props;

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
        <View style={pokemonHeaderStyles.headerContainer}>
          <View style={pokemonHeaderStyles.headerTitle}>
            <Text style={pokemonHeaderStyles.name}>
              {useCapitalizeFirstLetter(name)}
            </Text>
            <Text style={pokemonHeaderStyles.order}>
              #{`${order}`.padStart(3, 0)}
            </Text>
          </View>
          <View style={pokemonHeaderStyles.headerSubtitle}>
            {types.map((x, index) => (
              <View key={index} style={pokemonHeaderStyles.subtitleType}>
                <Text style={pokemonHeaderStyles.subtitleTypeText}>
                  {useCapitalizeFirstLetter(x)}
                </Text>
              </View>
            ))}
          </View>
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
