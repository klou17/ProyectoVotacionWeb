import type { ReactNode } from 'react'
import type { TextStyle } from 'react-native'
import { Text as TextReactNative } from 'react-native'
import { TextProps } from 'react-native'
import type { color } from '@/src/ui/styles/color'
import { fonts, fontSize } from '@/src/ui/styles/fonts'

interface Props {
  size?: keyof typeof fontSize
  fontFamily?: keyof typeof fonts
  color?: keyof typeof color
  style?: TextStyle
  children?: ReactNode
  numberOfLines?: number
  ellipsizeMode?: TextProps['ellipsizeMode']
}

export const Text = ({
  size = 'sm',
  fontFamily = 'MerriweatherBold',
  color = 'black',
  style,
  children,
  numberOfLines,
  ellipsizeMode,
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
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}>
      {children}
    </TextReactNative>
  )
}
