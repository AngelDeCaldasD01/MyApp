import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').height;
const desiredWidth = screenWidth * 1 + 60;
console.log(desiredWidth);
const pokemonInfoStyles = StyleSheet.create({
  bg: {
    height: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: 'relative',
    top: -60,
    zIndex: 4,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  selectedTab: {
    backgroundColor: 'blue',
  },
  tabText: {
    color: 'black',
  },
});

export default pokemonInfoStyles;
