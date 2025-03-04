import type { ReactNode } from 'react'
import { ImageBackground as ImageBackgroundReactNative, ImageSourcePropType, StyleSheet } from 'react-native'

interface Props {
  source: ImageSourcePropType | undefined
  children: ReactNode
}

export const ImageBackground = ({ source, children }: Props) => {
  return (
    <ImageBackgroundReactNative source={source} resizeMode='cover' style={styles.image}>
      {children}
    </ImageBackgroundReactNative>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})
