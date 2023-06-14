import { Text, View } from "react-native";
import pokedexStore from "../../api/pokedexStore";
import { useEffect } from "react";
import Toast from "react-native-toast-message";

export default function Pokedex() {
    const {list, getList} = pokedexStore();
    useEffect(() => {getList(); Toast.show({
        type: 'info',
        text1: 'Se han cargado los 20 primeros',
        visibilityTime: 4000
    })  }, [])
    console.log(list)
    return (
        <View>{list.map(({name}) => {return <Text key={name}>{name}</Text>})}<Toast
        position='bottom'
        bottomOffset={20}
      /></View>
    )
}