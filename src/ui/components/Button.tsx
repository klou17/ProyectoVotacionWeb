import type { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'

interface Props {
  children: ReactNode
  onPress: () => void
}

export const Button = ({ onPress, children }: Props) => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
}
