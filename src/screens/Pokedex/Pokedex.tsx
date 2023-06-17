import React from "react";
import { View, FlatList } from "react-native";
import pokedexStore, { IPokemon } from "../../api/PokedexStore";
import { useEffect } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import pokedexStyles from './Pokedex.styles';

export default function Pokedex() {
    const {getList, getItems, listCard} = pokedexStore();
    useEffect(() => {getList().then(() => {
        getItems()
    })}, [])
    console.log(listCard)

    const renderItem = ({item}:{item: IPokemon}) => {
        return <PokemonCard id={item.id} name={item.name} order={item.order} imageUrl={item.imageUrl} type={""}/>
    }

    const renderSeparator = () => {
        return <View style={{width: 5, backgroundColor: 'white'}} />;
      };

    return (
        // <View>{list.map(({name}) => {return <Text key={name}>{name}</Text>})}</View>
        <View>
            <FlatList 
                data={listCard}
                numColumns={2}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={pokedexStyles.flatList}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    )
}