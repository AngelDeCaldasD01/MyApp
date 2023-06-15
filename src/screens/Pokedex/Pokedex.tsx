import { Text, View } from "react-native";
import pokedexStore from "../../api/PokedexStoree";
import { useEffect } from "react";
import Toast from "react-native-toast-message";

export default function Pokedex() {
    const {list, getList} = pokedexStore();
    useEffect(() => {getList()}, [])
    console.log(list)
    return (
        <View>{list.map(({name}) => {return <Text key={name}>{name}</Text>})}<Toast
        position='bottom'
        bottomOffset={20}
      /></View>
    )
}