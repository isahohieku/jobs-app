import type { FC } from 'react'
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native'

import styles from './screenheader.style'

interface Props {
  iconUrl: ImageSourcePropType;
  dimension: string;
  handlePress?: () => void;
}

const ScreenHeaderBtn: FC<Props> = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.misc(dimension).btnImg}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn