import { StyleSheet } from 'react-native'
import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 8,
    paddingBottom: 13,
    backgroundColor: THEME.COLORS.BASE.GRAY_800,
    borderWidth: 1,
    borderColor: THEME.COLORS.BASE.GRAY_700,
    width: 311,
    borderEndEndRadius: 6,
    borderStartStartRadius: 6,
    borderTopEndRadius: 36,
    borderBottomStartRadius: 36,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  coffeeImage: {
    width: 96,
    height: 96,
    marginTop: -35,
  },
  content: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  coffeeInfo: {
    alignItems: 'flex-start',
  },
  coffeeInfoTitle: {
    fontFamily: THEME.FONTS.TITLE,
    fontSize: 16,
    textAlign: 'justify',
    color: THEME.COLORS.BASE.GRAY_200,
  },
  coffeeInfoDescription: {
    textAlign: 'justify',
    color: THEME.COLORS.BASE.GRAY_400,
    fontFamily: THEME.FONTS.TEXT,
    fontSize: 12,
    marginTop: 4,
  },
  price: {
    marginTop: 8,
    color: THEME.COLORS.BRANDING.YELLOW_DARK,
    fontSize: 14,
    fontFamily: THEME.FONTS.TEXT,
  },
  priceValue: {
    fontSize: 20,
    fontFamily: THEME.FONTS.TITLE,
  },
})
