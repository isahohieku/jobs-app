import React, { FC } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants';

interface BaseProps {
  activeTab: string;
}

interface TabButtonProps extends BaseProps {
  name: string;
  onHandleSearchtype(): void;
}

interface TabsProps extends BaseProps {
  tabs: string[];
  setActiveTab(item: string): void;
}

const TabButton: FC<TabButtonProps> = ({ name, activeTab, onHandleSearchtype }) => (
  <TouchableOpacity
    style={styles.misc(name, activeTab).btn}
    onPress={onHandleSearchtype}
  >
      <Text style={styles.misc(name, activeTab).btnText}>{name}</Text>
  </TouchableOpacity>
)

const Tabs: FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
          name={item}
          activeTab={activeTab}
          onHandleSearchtype={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2}}
      />
    </View>
  )
}

export default Tabs