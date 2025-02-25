import { useLocalSearchParams } from 'expo-router'
import { MotiText, MotiView } from 'moti'
import { Image, StyleSheet, Text, View } from 'react-native'
import { injectModule } from '@/src/di/injectModule'

export const ConcursanteDetail = () => {
  const { id } = useLocalSearchParams()

  const getCandidate = injectModule('getCandidate')
  const candidate = getCandidate(id[0])

  if (!candidate) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Concursante no encontrado</Text>
      </View>
    )
  }

  return (
    <MotiView
      style={styles.container}
      from={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 500 }}>
      {/* Imagen del concursante */}
      <MotiView
        style={styles.imageContainer}
        from={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 10 }}>
        <Image source={{ uri: candidate.photo }} style={styles.image} />
      </MotiView>

      {/* Nombre y descripción */}
      <MotiText style={styles.name} from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 300 }}>
        {candidate.name}
      </MotiText>
      <MotiText style={styles.description} from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 400 }}>
        {candidate.description}
      </MotiText>
    </MotiView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  error: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    color: 'red',
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderRadius: 100,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  iconButton: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 50,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backText: {
    fontSize: 18,
    color: '#666',
  },
})
