import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import tabsStyles from './Tabs.styled';

interface ITabs {
  tabs: string[];
  onTabPress: (index: number) => void;
  views: React.ReactNode[];
}

export default function Tabs(props: ITabs) {
  const {tabs, onTabPress, views} = props;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    onTabPress(index);
  };

  return (
    <>
      <View style={tabsStyles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTabPress(index)}
            activeOpacity={1} // Desactiva la animación de opacidad
            style={[
              tabsStyles.tab,
              index === activeTab && tabsStyles.activeTab,
            ]}>
            <Text
              style={[
                index === activeTab
                  ? tabsStyles.activeTabText
                  : tabsStyles.inactiveTabText,
                tabsStyles.tabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {views[activeTab]}
    </>
  );
}
