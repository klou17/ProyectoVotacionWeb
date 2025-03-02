import type { ReactNode } from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'

interface Props {
  children: ReactNode
  style?: StyleProp<ViewStyle>
  onPress: () => void
}

export const Button = ({ onPress, children, style }: Props) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}
