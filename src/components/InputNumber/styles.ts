import { StyleSheet } from 'react-native'
import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  textInput: {
    fontFamily: THEME.FONTS.TEXT,
    fontSize: 16,
    textAlign: 'center',
  },
})
