import { Image, ImageSourcePropType, Text, View } from 'react-native'
import { styles } from './styles'

type CatalogCardProps = {
  image: ImageSourcePropType
  title: string
  description: string
  price: number
}

export function CatalogCard({
  description,
  image,
  price,
  title,
}: CatalogCardProps) {
  const formattedPrice = price
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace('R$', '')

  return (
    <View style={styles.wrapper}>
      <Image style={styles.coffeeImage} source={image} alt="imagem do café" />
      <View style={styles.content}>
        <View style={styles.coffeeInfo}>
          <Text style={styles.coffeeInfoTitle}>{title}</Text>
          <Text style={styles.coffeeInfoDescription}>{description}</Text>
        </View>

        <Text style={styles.price}>
          R$
          <Text style={styles.priceValue}>{formattedPrice}</Text>
        </Text>
      </View>
    </View>
  )
}
