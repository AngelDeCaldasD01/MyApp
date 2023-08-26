import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').height;
const desiredWidth = screenWidth * 1 + 60;

const pokemonInfoStyles = StyleSheet.create({
  // bg: {
  //   width: '100%',
  //   height: desiredWidth - 487,
  //   backgroundColor: 'white',
  //   borderTopLeftRadius: 24,
  //   borderTopRightRadius: 24,
  //   position: 'absolute',
  //   bottom: 0,
  //   zIndex: 1,
  // },
  content: {
    padding: 20,
    minHeight: desiredWidth - 548,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: 'relative',
    zIndex: 1,
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
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 115,
    left: 80,
    zIndex: 2,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'cover',
  },
});

export default pokemonInfoStyles;
