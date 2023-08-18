import {StyleSheet} from 'react-native';

const cardStyles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: 110,
    borderRadius: 12,
    padding: 8,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  orderText: {
    color: 'white',
  },
  nameText: {
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  cardImage: {
    height: 80,
    width: 80,
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
});

export default cardStyles;
