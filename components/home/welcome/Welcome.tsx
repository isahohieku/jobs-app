import { FC, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes = ['Full-time', 'Part-time', 'Contract']

interface Props {
  searchTerm: string;
  setSearchTerm(text: string): void;
  handleClick(): void;
}

const Welcome: FC<Props> = ({ searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState(jobTypes[0]);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Isah</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.misc(activeJobType, item).tab}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.misc(activeJobType, item).tabText}>{item}</Text>
            </TouchableOpacity>
          )} 
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small}}
          horizontal
          />

      </View>
    </View>
  )
}

export default Welcome