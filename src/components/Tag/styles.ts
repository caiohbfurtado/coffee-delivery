import { StyleSheet } from 'react-native'
import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: THEME.COLORS.BRANDING.PURPLE_MEDIUM,
    backgroundColor: 'transparent',
  },
  tagChecked: {
    backgroundColor: THEME.COLORS.BRANDING.PURPLE_MEDIUM,
  },
  tagTitle: {
    color: THEME.COLORS.BRANDING.PURPLE_DARK,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 10,
    textTransform: 'uppercase',
  },
  tagTitleChecked: {
    color: THEME.COLORS.BASE.WHITE,
  },
})
