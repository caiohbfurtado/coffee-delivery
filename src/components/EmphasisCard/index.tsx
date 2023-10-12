import { Image, ImageSourcePropType, Text, View } from 'react-native'
import { styles } from './styles'

type EmphasisCardProps = {
  image: ImageSourcePropType
  type: 'especial'
  title: string
  description: string
  price: number
  size?: 'SM' | 'MD'
}

export function EmphasisCard({
  description,
  image,
  price,
  title,
  type,
  size = 'SM',
}: EmphasisCardProps) {
  const isMD = size === 'MD'
  const formattedPrice = price
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace('R$', '')

  return (
    <View style={[styles.wrapper, isMD && styles.MDWrapper]}>
      <Image
        style={[styles.coffeeImage, isMD && styles.MDCoffeeImage]}
        source={image}
        alt="imagem do café"
      />
      <View style={[styles.content, isMD && styles.MDContent]}>
        <View style={[styles.badge, isMD && styles.MDBadge]}>
          <Text style={[styles.badgeText, isMD && styles.MDBadgeText]}>
            {type}
          </Text>
        </View>

        <View style={styles.coffeeInfo}>
          <Text
            style={[styles.coffeeInfoTitle, isMD && styles.MDCoffeeInfoTitle]}
          >
            {title}
          </Text>
          <Text
            style={[
              styles.coffeeInfoDescription,
              isMD && styles.MDCoffeeInfoDescription,
            ]}
          >
            {description}
          </Text>
        </View>

        <Text style={[styles.price, isMD && styles.MDPrice]}>
          R$
          <Text style={[styles.priceValue, isMD && styles.MDPriceValue]}>
            {formattedPrice}
          </Text>
        </Text>
      </View>
    </View>
  )
}
