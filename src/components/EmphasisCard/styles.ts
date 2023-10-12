import { StyleSheet } from 'react-native'
import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 12,
    paddingBottom: 16,
    paddingTop: 72,
    backgroundColor: THEME.COLORS.BASE.GRAY_800,
    borderWidth: 0.8,
    borderColor: THEME.COLORS.BASE.GRAY_700,
    width: 166,
    borderEndEndRadius: 4.8,
    borderStartStartRadius: 4.8,
    borderTopEndRadius: 28.8,
    borderBottomStartRadius: 28.8,
    alignItems: 'center',
  },
  MDWrapper: {
    width: 200,
    paddingHorizontal: 16,
    paddingBottom: 20,
    paddingTop: 96,
    borderEndEndRadius: 6,
    borderStartStartRadius: 6,
    borderTopEndRadius: 36,
    borderBottomStartRadius: 36,
  },
  coffeeImage: {
    width: 64,
    height: 64,
    position: 'absolute',
    top: -10,
  },
  MDCoffeeImage: {
    width: 120,
    height: 120,
    top: -32,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  MDContent: {
    gap: 14,
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 80,
    backgroundColor: THEME.COLORS.BRANDING.PURPLE_LIGHT,
  },
  badgeText: {
    fontFamily: THEME.FONTS.BOLD,
    textTransform: 'uppercase',
    fontSize: 8,
    color: THEME.COLORS.BRANDING.PURPLE_MEDIUM,
  },
  MDBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 100,
  },
  MDBadgeText: {
    fontSize: 10,
  },
  coffeeInfo: {
    alignItems: 'center',
  },
  coffeeInfoTitle: {
    fontFamily: THEME.FONTS.TITLE,
    fontSize: 14,
    textAlign: 'center',
    color: THEME.COLORS.BASE.GRAY_200,
  },
  coffeeInfoDescription: {
    textAlign: 'center',
    color: THEME.COLORS.BASE.GRAY_400,
    fontFamily: THEME.FONTS.TEXT,
    fontSize: 10,
  },
  MDCoffeeInfoTitle: {
    fontSize: 20,
  },
  MDCoffeeInfoDescription: {
    fontSize: 12,
  },
  price: {
    color: THEME.COLORS.BRANDING.YELLOW_DARK,
    fontSize: 10,
    fontFamily: THEME.FONTS.TEXT,
  },
  priceValue: {
    fontSize: 20,
    fontFamily: THEME.FONTS.TITLE,
  },
  MDPrice: {
    fontSize: 14,
  },
  MDPriceValue: {
    fontSize: 24,
  },
})
