import { Button } from '../../components/Button'
import { ImageContent } from '../../components/Image'
import { SocialMediaIcons } from '../../components/SocialMediaIcon'
import { StyleSheet, Text, View } from 'react-native'
import { Persona } from './persons'

export const ConcursantePage = ({ persona }: { persona: Persona }) => {
  return (
    <View style={styles.card}>
      <ImageContent url={persona.photo} />
      <Text style={styles.name}>{persona.name}</Text>
      <Text style={styles.description}>{persona.description}</Text>
      <SocialMediaIcons social={persona.social} />
      <Button onPress={() => {}}>
        <Text style={styles.name}>Votar favorita</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 30,
    backgroundColor: '#0553',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
})
