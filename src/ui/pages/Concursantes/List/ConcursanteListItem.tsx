import { Button } from '../../../components/Button'
import { ImageContent } from '../../../components/Image'
import { SocialMediaIcons } from '../../../components/SocialMediaIcon'
import { useRouter } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import { Candidate } from '@/src/core/candidates/domain/candidate'
import { Text } from '@/src/ui/components/Text'

export const ConcursanteListItem = ({ candidate }: { candidate: Candidate }) => {
  const router = useRouter()

  return (
    <View style={styles.card}>
      <ImageContent url={candidate.photo} />
      <Text fontFamily='LatoBold' size='md'>
        {candidate.name}
      </Text>
      <Text fontFamily='LatoRegular' color='blueDarker' numberOfLines={4}>
        {candidate.description}
      </Text>
      <SocialMediaIcons social={candidate.social} />
      <Button onPress={() => router.push(`/concursante/${candidate.id}`)}>
        <Text>Ver mas</Text>
      </Button>
      <Button onPress={() => {}}>
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
