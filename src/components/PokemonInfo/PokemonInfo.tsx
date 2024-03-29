import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import pokemonInfoStyles from './PokemonInfo.styled';
import Tabs from '../Tabs/Tabs';
import FastImage from 'react-native-fast-image';

interface IPokemonInfo {
  imageUrl?: string;
}

export default function PokemonInfo(props: IPokemonInfo) {
  const {imageUrl} = props;
  const [, setActiveTabIndex] = useState(0);

  const handleTabPress = (index: number) => {
    setActiveTabIndex(index);
  };

  const tabs = ['About', 'Base Stats', 'Evolution', 'Moves'];
  const tabViews = [
    <View key={0}>
      <Text>Contenido de Tab 1</Text>
    </View>,
    <View key={1}>
      <Text>Contenido de Tab 2</Text>
    </View>,
    <View key={2}>
      <Text>Contenido de Tab 3</Text>
    </View>,
    <View key={3}>
      <Text>Contenido de Tab 4</Text>
    </View>,
  ];

  return (
    <View style={pokemonInfoStyles.bg}>
      <View style={pokemonInfoStyles.content}>
        {imageUrl && (
          <View style={pokemonInfoStyles.contentImg}>
            <FastImage
              style={pokemonInfoStyles.image}
              source={{uri: imageUrl}}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        )}
        <View style={{height: 20}} />
        <Tabs tabs={tabs} onTabPress={handleTabPress} views={tabViews} />
      </View>
    </View>
  );
}
