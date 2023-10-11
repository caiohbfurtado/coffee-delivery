import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  Text,
} from 'react-native'
import { styles } from './styles'
import { useEffect, useState } from 'react'

type TagProps = PressableProps & {
  title: string
  checked?: boolean
}

export function Tag({ title, checked = false, onPress, ...rest }: TagProps) {
  const [isChecked, setIsChecked] = useState(checked)

  function handleChangeStatus(event: GestureResponderEvent) {
    setIsChecked((prevState) => !prevState)

    onPress?.(event)
  }

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  return (
    <Pressable
      onPress={handleChangeStatus}
      {...rest}
      style={[styles.tag, isChecked && styles.tagChecked]}
    >
      <Text style={[styles.tagTitle, isChecked && styles.tagTitleChecked]}>
        {title}
      </Text>
    </Pressable>
  )
}
