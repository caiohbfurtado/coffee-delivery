import { StyleSheet } from 'react-native'
import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
  cart: {
    padding: 8,
    borderRadius: 6,
  },
  badge: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: THEME.COLORS.BRANDING.PURPLE_MEDIUM,
    right: -8,
    top: -8,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontFamily: THEME.FONTS.TEXT,
    fontSize: 12,
    color: THEME.COLORS.BASE.WHITE,
  },
})
