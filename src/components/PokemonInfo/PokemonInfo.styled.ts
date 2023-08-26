import {StyleSheet} from 'react-native';

// const screenWidth = Dimensions.get('window').height;
// const desiredWidth = screenWidth * 1 + 60;

const pokemonInfoStyles = StyleSheet.create({
  bg: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    zIndex: 6,
    flex: 1,
  },
  content: {
    padding: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: 'relative',
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
  contentImg: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: -250,
    zIndex: 5,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'cover',
  },
});

export default pokemonInfoStyles;
