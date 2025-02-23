import { Button } from '../../../components/Button'
import { ImageContent } from '../../../components/Image'
import { SocialMediaIcons } from '../../../components/SocialMediaIcon'
import { Persona } from '../persons'
import { useRouter } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import { voteFavorite } from '@/src/core/useCases/voteFavorite'
import { Text } from '@/src/ui/components/Text'

export const ConcursanteListItem = ({ persona }: { persona: Persona }) => {
  const router = useRouter()

  return (
    <View style={styles.card}>
      <ImageContent url={persona.photo} />
      <Text fontFamily='LatoBold' size='md'>
        {persona.name}
      </Text>
      <Text fontFamily='LatoRegular' color='blueDarker' numberOfLines={4}>
        {persona.description}
      </Text>
      <SocialMediaIcons social={persona.social} />
      <Button onPress={() => router.push(`/concursante/${persona.id}`)}>
        <Text>Ver mas</Text>
      </Button>
      <Button onPress={() => voteFavorite()}>
        <View style={styles.rectangle}>
          <Text fontFamily='LatoRegular' color='blue'>
            Votar favorita
          </Text>
        </View>
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
    gap: 16,
  },
  rectangle: {
    borderWidth: 1,
    borderColor: '#4052d6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
})
