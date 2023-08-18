import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import pokemonStore from '../../api/PokemonStore';
import PokemonHeader from '../../components/PokemonHeader/PokemonHeader';

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

  console.log(isLoadingMore);

  return (
    <ScrollView>
      {isLoadingMore ? (
        <ActivityIndicator size="large" color="#AEAEAE" />
      ) : (
        <PokemonHeader
          id={params.id}
          name={detailPokemon.name}
          order={detailPokemon.order}
          imageUrl={
            detailPokemon.sprites.other['official-artwork'].front_default
          }
          types={[
            detailPokemon.types[0].type.name,
            detailPokemon?.types[1]?.type?.name,
          ]}
        />
      )}
    </ScrollView>
  );
}
