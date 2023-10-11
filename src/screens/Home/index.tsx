import { View } from 'react-native'
import { styles } from './styles'
import { Tag } from '../../components/Tag'
import { useState } from 'react'

export function Home() {
  return (
    <View style={styles.wrapper}>
      <Tag title="Teste" />
    </View>
  )
}
