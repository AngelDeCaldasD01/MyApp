import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Animated} from 'react-native';
import tabsStyles from './Tabs.styled';

interface ITabs {
  tabs: string[];
  onTabPress: (index: number) => void;
  views: React.ReactNode[];
}

export default function Tabs(props: ITabs) {
  const {tabs, onTabPress, views} = props;
  const [activeTab, setActiveTab] = useState(0);
  const tabIndicatorWidth = new Animated.Value(0);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    onTabPress(index);

    Animated.spring(tabIndicatorWidth, {
      toValue: index === activeTab ? 0 : 2, // Cambia el valor de 0 a 1 según sea necesario
      useNativeDriver: false,
    }).start();
  };

  const tabIndicatorStyle = {
    width: tabIndicatorWidth.interpolate({
      inputRange: [0, 2],
      outputRange: ['0%', '100%'],
    }),
  };

  return (
    <>
      <View style={tabsStyles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTabPress(index)}
            style={[
              tabsStyles.tab,
              index === activeTab && tabsStyles.activeTab,
            ]}>
            <Text style={tabsStyles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
        <Animated.View style={[tabsStyles.tabIndicator, tabIndicatorStyle]} />
      </View>
      {views[activeTab]}
    </>
  );
}
