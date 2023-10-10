import { View } from 'react-native'
import { Button } from '../../components/Button'
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.wrapper}>
      <Button label="Teste" color="yellow" />
      <Button label="Teste" color="purple" />
      <Button type="icon" icon="default" />
      <Button type="icon" icon="remove" />
    </View>
  )
}
