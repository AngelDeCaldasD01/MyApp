import {StyleSheet} from 'react-native';

const tabsStyles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue', // Color de la barra activa
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default tabsStyles;
