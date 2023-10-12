import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from './styles'
import { EmphasisCard } from '../../components/EmphasisCard'

import irlandesImage from '../../assets/irlandes.png'

export function Home() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <EmphasisCard
          image={irlandesImage}
          type="especial"
          title="Irlândes"
          price={9.9}
          description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
        />
        <EmphasisCard
          size="MD"
          image={irlandesImage}
          type="especial"
          title="Irlândes"
          price={9.9}
          description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
