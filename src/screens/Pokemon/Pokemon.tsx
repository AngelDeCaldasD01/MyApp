import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, View} from 'react-native';
import pokemonStyles from './Pokemon.styles';
import pokemonStore from '../../api/PokemonStore';
import PokemonHeader from '../../components/PokemonHeader/PokemonHeader';
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo';

export default function Pokemon(props: any) {
  const {
    navigation,
    route: {params},
  } = props;

  const {getDetailPokemon, detailPokemon} = pokemonStore();
  const [isLoadingMore, setIsLoadingMore] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        getDetailPokemon(params.id);
      } catch (error) {
        navigation.goBack();
      } finally {
        setIsLoadingMore(false);
      }
    })();
  }, []);

  console.log(isLoadingMore && !detailPokemon);

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      {isLoadingMore && detailPokemon ? (
        <ActivityIndicator size="large" color="#AEAEAE" />
      ) : (
        <SafeAreaView style={{flex: 1}}>
          <PokemonHeader
            id={params.id}
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
          <PokemonInfo />
        </SafeAreaView>
      )}
    </ScrollView>
  );
}
