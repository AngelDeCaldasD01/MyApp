import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import pokemonInfoStyles from './PokemonInfo.styled';

export default function PokemonInfo() {
  const [selectedTab, setSelectedTab] = useState('Tab1');

  const handleTabPress = (tabName: string) => {
    setSelectedTab(tabName);
  };
  return (
    <View style={pokemonInfoStyles.bg}>
      <View style={pokemonInfoStyles.tabsContainer}>
        <TouchableOpacity
          style={[
            pokemonInfoStyles.tab,
            selectedTab === 'Tab1' && pokemonInfoStyles.selectedTab,
          ]}
          onPress={() => handleTabPress('Tab1')}>
          <Text style={pokemonInfoStyles.tabText}>Tab 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            pokemonInfoStyles.tab,
            selectedTab === 'Tab2' && pokemonInfoStyles.selectedTab,
          ]}
          onPress={() => handleTabPress('Tab2')}>
          <Text style={pokemonInfoStyles.tabText}>Tab 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            pokemonInfoStyles.tab,
            selectedTab === 'Tab3' && pokemonInfoStyles.selectedTab,
          ]}
          onPress={() => handleTabPress('Tab3')}>
          <Text style={pokemonInfoStyles.tabText}>Tab 3</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido específico del tab seleccionado */}
      {selectedTab === 'Tab1' && (
        <View>
          <Text>Contenido de Tab 1</Text>
        </View>
      )}
      {selectedTab === 'Tab2' && (
        <View>
          <Text>Contenido de Tab 2</Text>
        </View>
      )}
      {selectedTab === 'Tab3' && (
        <View>
          <Text>Contenido de Tab 3</Text>
        </View>
      )}
    </View>
  );
}
