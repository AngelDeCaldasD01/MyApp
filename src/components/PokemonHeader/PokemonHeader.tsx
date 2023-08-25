import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {IPokemon} from '../../api/PokedexStore';
import {getColorByPokemonType} from '../../utils/getColorByPokemonType';
import {TPOKEMON_TYPE_COLORS} from '../../utils/pokemonTypeColors';
import pokemonHeaderStyles from './PokemonHeader.styled';
import {useCapitalizeFirstLetter} from '../../utils/useCapitalizeFirstLetter';

export default function PokemonHeader(props: IPokemon) {
  const {name, order, types} = props;

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
              #{`${order}`.padStart(3, '0')}
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
        <View style={pokemonHeaderStyles.spaceImage} />
      </SafeAreaView>
    </>
  );
}
