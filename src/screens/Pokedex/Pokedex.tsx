import React, { useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import pokedexStore, { IPokemon } from "../../api/PokedexStore";
import { useEffect } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import pokedexStyles from './Pokedex.styles';

export default function Pokedex() {
    const {getList, getItems, listCard} = pokedexStore();
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    // useEffect(() => {
    //     getList().
    //         then(() => {
    //             getItems()
    //         });
    // }, [])

    const renderItem = ({item}:{item: IPokemon}) => {
        return <PokemonCard id={item.id} name={item.name} order={item.order} imageUrl={item.imageUrl} types={item.types}/>
    }

    const loadMore = () => {
        if (isLoadingMore) return; 
          
        setIsLoadingMore(true);
        getList().
            then(() => {
                getItems()
            }).finally(() => {
                setIsLoadingMore(false);
              });
    }

    return (
        <View>
            <FlatList 
                data={listCard}
                numColumns={2}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={pokedexStyles.flatListColumnWrapper}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={pokedexStyles.flatListContainer}
                onEndReached={loadMore}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<ActivityIndicator size="large" color="#AEAEAE"/>}
                ListFooterComponentStyle={pokedexStyles.spinner}
            />
        </View>
    )
}