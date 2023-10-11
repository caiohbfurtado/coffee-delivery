import { View } from 'react-native'
import { styles } from './styles'
import { InputNumber } from '../../components/InputNumber'

export function Home() {
  return (
    <View style={styles.wrapper}>
      <InputNumber value={0} />
    </View>
  )
}
