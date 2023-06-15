import { View, FlatList } from "react-native";
import pokedexStore, { IPokemon } from "../../api/PokedexStore";
import { useEffect } from "react";
import PokemonCard from "../../components/PokemonCard";

export default function Pokedex() {
    const {list, getList, getItems, listCard} = pokedexStore();
    useEffect(() => {getList().then(() => {
        getItems()
    })}, [])
    console.log(listCard)

    const renderItem = ({item}:{item: IPokemon}) => {
        return <PokemonCard id={item.id} name={item.name} order={item.order} imageUrl={item.imageUrl} type={""}/>
    }

    return (
        // <View>{list.map(({name}) => {return <Text key={name}>{name}</Text>})}</View>
        <View>
            <FlatList 
                data={listCard}
                numColumns={2}
                renderItem={renderItem}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}