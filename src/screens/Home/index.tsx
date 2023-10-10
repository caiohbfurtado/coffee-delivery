import { View } from 'react-native'
import { styles } from './styles'
import { Cart } from '../../components/Cart'

export function Home() {
  return (
    <View style={styles.wrapper}>
      <Cart items={3} />
    </View>
  )
}
