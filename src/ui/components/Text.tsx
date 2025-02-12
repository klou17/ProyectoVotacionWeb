import { fonts, fontSize } from '../styles/fonts'
import type { ReactNode } from 'react'
import type { TextStyle } from 'react-native'
import { Text as TextReactNative } from 'react-native'
import type { color } from '@/src/ui/styles/color'

interface Props {
  size?: keyof typeof fontSize
  fontFamily?: keyof typeof fonts
  color?: keyof typeof color
  style?: TextStyle
  children?: ReactNode
  numberOfLines?: number
}

export const Text = ({
  size = 'sm',
  fontFamily = 'MerriweatherBold',
  color = 'black',
  style,
  children,
  numberOfLines,
}: Props) => {
  return (
    <TextReactNative
      style={[
        {
          color: color,
          fontSize: fontSize[size],
          fontFamily: fonts[fontFamily],
        },
        style, // Allow additional styles
      ]}
      numberOfLines={numberOfLines}>
      {children}
    </TextReactNative>
  )
}
