import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from './styles'
import { Input } from '../../components/Input'

export function Home() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <Input />
      </View>
    </TouchableWithoutFeedback>
  )
}
