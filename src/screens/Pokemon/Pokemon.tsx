import React from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView} from 'react-native';
import pokemonStyles from './Pokemon.styles';
import pokemonStore from '../../api/PokemonStore';
import PokemonHeader from '../../components/PokemonHeader/PokemonHeader';
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo';

export default function Pokemon() {
  const {detailPokemon} = pokemonStore();

  if (!detailPokemon) {
    return (
      <ActivityIndicator
        size="large"
        color="#AEAEAE"
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      />
    );
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <PokemonHeader
        id={detailPokemon.id}
        name={detailPokemon.name}
        order={detailPokemon.order}
        imageUrl={
          detailPokemon?.sprites?.other['official-artwork']?.front_default
        }
        types={[
          detailPokemon.types[0].type.name,
          detailPokemon?.types[1]?.type?.name,
        ].filter(Boolean)}
      />
      <PokemonInfo
        imageUrl={
          detailPokemon?.sprites?.other['official-artwork']?.front_default
        }
      />
    </ScrollView>
  );
}
