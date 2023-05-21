import {FC} from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

import { checkImageURL } from '../../../../utils'
import { Job } from '../../../../types'

interface Props {
  item: Job;
  selectedJob: string;
  handleCardPress(item: Job): void;
}

const PopularJobCard: FC<Props> = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.misc(selectedJob, item).container}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        style={styles.misc(selectedJob, item).logoContainer}>
        <Image
          source={{ uri: checkImageURL(item.employer_logo) ? item.employer_logo : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqz05H.jpg' }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.misc(selectedJob, item).jobName} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard