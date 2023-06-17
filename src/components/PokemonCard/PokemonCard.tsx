import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { IPokemon } from "../../api/PokedexStore";
import Toast from "react-native-toast-message";
import cardStyles from "./PokemonCard.styled"

export default function PokemonCard(props:IPokemon) {
    const {name, order, imageUrl, type} = props;

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
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={cardStyles.cardContainer}>
                <View style={cardStyles.spacing}>
                <Text >
                {`${order}`.padStart(3, '0')}
                </Text>
                    <Text>#{`${order} ${name}`}</Text>
                    <Image style={{width: 30, height: 30}} source={{ uri: imageUrl }} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}