import { StyleSheet } from 'react-native'
import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: THEME.COLORS.BASE.GRAY_200,
    width: '100%',
    gap: 8,
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  wrapperFocused: {
    borderWidth: 1,
    borderColor: THEME.COLORS.BASE.GRAY_300,
  },
  textInput: {
    width: '100%',
    fontFamily: THEME.FONTS.TEXT,
    fontSize: 14,
    color: THEME.COLORS.BASE.GRAY_700,
  },
})
