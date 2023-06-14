import { Text, View } from "react-native";
import pokedexStore from "../../api/pokedexStore";
import { useEffect } from "react";

export default function Pokedex() {
    const {list, getList} = pokedexStore();
    useEffect(() => {getList()}, [])
    console.log(list)
    return (
        <View>{list.map(({name}) => {return <Text>{name}</Text>})}</View>
    )
}