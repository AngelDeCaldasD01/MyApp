import {StyleSheet} from 'react-native';

const pokemonHeaderStyles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    // borderBottomEndRadius: 300,
    // borderBottomLeftRadius: 300,
    // transform: [{scaleX: 2}],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  headerContainer: {
    flexDirection: 'column',
    paddingTop: 40,
    gap: 8,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerSubtitle: {
    flexDirection: 'row',
    gap: 8,
  },
  subtitleType: {
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitleTypeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 27,
  },
  order: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    fontSize: 16,
  },
  spaceImage: {
    width: 250,
    height: 240,
  },
  contentImg: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'cover',
  },
});

export default pokemonHeaderStyles;
