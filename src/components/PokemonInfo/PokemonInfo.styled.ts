import {StyleSheet} from 'react-native';

const pokemonInfoStyles = StyleSheet.create({
  bg: {
    flex: 1,
    height: '100%',
    width: '100%',

    backgroundColor: 'white',
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
