import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import pokemonInfoStyles from './PokemonInfo.styled';
import Tabs from '../Tabs/Tabs';

export default function PokemonInfo() {
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabPress = (index: number) => {
    setActiveTabIndex(index);
  };

  const tabViews = [
    <View
      key={0}
      style={{
        backgroundColor: 'cyan',
        flex: 1,
        justifyContent: 'flex-end',
      }}>
      <Text>Contenido de Tab 1</Text>
    </View>,
    <View key={1}>
      <Text>Contenido de Tab 2</Text>
    </View>,
    <View key={2}>
      <Text>Contenido de Tab 3</Text>
    </View>,
  ];

  return (
    <View style={pokemonInfoStyles.bg}>
      <Tabs tabs={tabs} onTabPress={handleTabPress} views={tabViews} />
    </View>
  );
}
