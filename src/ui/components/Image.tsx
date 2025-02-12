import { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'

export const ImageContent = ({ url }: { url: string }) => {
  const [loading, setLoading] = useState(true)

  return (
    <View style={styles.imageContainer}>
      {loading && <ActivityIndicator size='small' color='#888' />}
      <Image
        source={{ uri: url }}
        style={styles.image}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 24,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
})
