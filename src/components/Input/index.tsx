import { TextInput, TextInputProps, View } from 'react-native'
import { styles } from './styles'
import { THEME } from '../../styles/theme'
import { useEffect, useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react-native'

export function Input({ value, onChangeText, ...rest }: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState(value ?? '')

  function handleOnChangeText(text: string) {
    setInputValue(text)
    onChangeText?.(text)
  }

  function handleOnFocus() {
    setIsFocused(true)
  }

  function handleOnBlur() {
    setIsFocused(false)
  }

  useEffect(() => {
    if (value) {
      setInputValue(value)
    } else {
      setInputValue('')
    }
  }, [value])

  const hasBorderStyle = inputValue.trim().length > 0 || isFocused

  const iconColor = isFocused
    ? THEME.COLORS.BRANDING.YELLOW_MEDIUM
    : THEME.COLORS.BASE.GRAY_400

  return (
    <View style={[styles.wrapper, hasBorderStyle && styles.wrapperFocused]}>
      <MagnifyingGlass
        size={16}
        color={
          inputValue && !isFocused
            ? THEME.COLORS.BRANDING.YELLOW_DARK
            : iconColor
        }
      />

      <TextInput
        placeholder="Teste aaaaa"
        value={inputValue}
        onChangeText={handleOnChangeText}
        placeholderTextColor={THEME.COLORS.BASE.GRAY_400}
        style={styles.textInput}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        selectionColor={THEME.COLORS.BASE.GRAY_400}
        {...rest}
      />
    </View>
  )
}
