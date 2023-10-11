import { Text, View } from 'react-native'
import { Button } from '../Button'
import { styles } from './styles'
import { Minus, Plus } from 'phosphor-react-native'
import { useEffect, useState } from 'react'

type InputNumberProps = {
  onAdd?: () => void
  onSub?: () => void
  value: number
}

export function InputNumber({ onAdd, onSub, value = 0 }: InputNumberProps) {
  const [currentValue, setCurrentValue] = useState(value)

  function handleAdd() {
    setCurrentValue((prevState) => prevState + 1)
    onAdd?.()
  }

  function handleSubtract() {
    if (currentValue === 0) {
      return
    }

    setCurrentValue((prevState) => prevState - 1)
    onSub?.()
  }

  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  return (
    <View style={styles.wrapper}>
      <Button onPress={handleSubtract} type="icon" icon={Minus} />
      <Text>{currentValue}</Text>
      <Button onPress={handleAdd} type="icon" icon={Plus} />
    </View>
  )
}
