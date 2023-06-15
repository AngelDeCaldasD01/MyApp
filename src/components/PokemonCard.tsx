import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { IPokemon } from "../api/PokedexStore";
import Toast from "react-native-toast-message";

export default function PokemonCard(props:IPokemon) {
    const {name, order, imageUrl} = props;

    const goToPokemon = () => {
        console.log(`Vamos al pokemon: ${name}`);
        Toast.show({
            text1: `Pokemon: ${name}`,
            type: "info",
            autoHide: true,
            visibilityTime: 2000
          });
      };

    return (
        <View>
            <TouchableWithoutFeedback onPress={goToPokemon}>
                <View>
                    <Text>#{`${order} ${name}`}</Text>
                    <Image style={{width: 30, height: 30}} source={{ uri: imageUrl }} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}