import {StyleSheet} from 'react-native';

const tabsStyles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 20,
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
    borderBottomColor: '#6971b0',
  },

  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  activeTabText: {color: 'black'},
  inactiveTabText: {color: '#d2d2d2'},
});

export default tabsStyles;
