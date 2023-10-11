import { Pressable, PressableProps, Text } from 'react-native'
import { styles } from './styles'
import { Trash, Icon } from 'phosphor-react-native'
import { THEME } from '../../styles/theme'

export type ButtonColors = 'yellow' | 'purple'

type ConditionalType =
  | {
      type?: 'default'
      label: string
      icon?: never
    }
  | {
      type: 'icon'
      label?: never
      icon: Icon | 'remove'
    }

type ButtonProps = PressableProps & {
  color?: ButtonColors
} & ConditionalType

export function Button({
  color = 'yellow',
  label,
  type = 'default',
  icon = 'remove',
  ...rest
}: ButtonProps) {
  const Icon = icon === 'remove' ? Trash : icon

  return type === 'default' ? (
    <Pressable {...rest} style={[styles.button, styles[`${color}Button`]]}>
      {label && <Text style={styles.label}>{label}</Text>}
    </Pressable>
  ) : (
    <Pressable
      {...rest}
      style={[styles.icon, icon === 'remove' && styles[`${icon}Icon`]]}
    >
      <Icon
        size={20}
        color={THEME.COLORS.BRANDING.PURPLE_MEDIUM}
        weight={icon === 'remove' ? 'regular' : 'bold'}
      />
    </Pressable>
  )
}
