import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from './styles'
import { CatalogCard } from '../../components/CatalogCard'

import irlandesImage from '../../assets/irlandes.png'
import React from 'react'

export function Home() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <CatalogCard
          image={irlandesImage}
          title="Irlândes"
          price={9.9}
          description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
