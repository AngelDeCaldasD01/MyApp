import {StyleSheet} from 'react-native';

const pokedexStyles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 12,
  },
  flatListColumnWrapper: {
    justifyContent: 'space-between',
    gap: 12,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
    color: 'red',
  },
});

export default pokedexStyles;
