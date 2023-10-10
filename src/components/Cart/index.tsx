import { ShoppingCart } from 'phosphor-react-native'
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'
import { THEME } from '../../styles/theme'
import { styles } from './styles'

type CartProps = TouchableOpacityProps & {
  items: number
}

export function Cart({ items, ...rest }: CartProps) {
  const isEmpty = items === 0

  return (
    <TouchableOpacity style={styles.cart} {...rest}>
      {!isEmpty && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{items}</Text>
        </View>
      )}
      <ShoppingCart
        size={20}
        weight="fill"
        color={
          isEmpty
            ? THEME.COLORS.BRANDING.YELLOW_DARK
            : THEME.COLORS.BRANDING.PURPLE_MEDIUM
        }
      />
    </TouchableOpacity>
  )
}
