import { StyleSheet } from 'react-native';

const pokedexStyles = StyleSheet.create<any>({
    flatListContainer: {
        paddingHorizontal: 12,
        paddingVertical: 12,
        gap: 12
    },
    flatListColumnWrapper: {
        justifyContent: "space-between", 
        gap: 12
    }
});

export default pokedexStyles;
