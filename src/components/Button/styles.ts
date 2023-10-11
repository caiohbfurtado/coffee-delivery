import { StyleSheet } from 'react-native'
import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
  button: {
    minWidth: 132,
    paddingHorizontal: 8,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  yellowButton: {
    backgroundColor: THEME.COLORS.BRANDING.YELLOW_DARK,
  },
  purpleButton: {
    backgroundColor: THEME.COLORS.BRANDING.PURPLE_DARK,
  },
  label: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 14,
    textTransform: 'uppercase',
    color: THEME.COLORS.BASE.WHITE,
  },
  icon: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  removeIcon: {
    backgroundColor: THEME.COLORS.BASE.GRAY_700,
  },
})
