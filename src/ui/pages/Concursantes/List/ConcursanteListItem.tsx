import { useRouter } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import { Candidate } from '@/src/core/candidates/domain/candidate'
import { Button } from '@/src/ui/components/Button/Button'
import { ImageContent } from '@/src/ui/components/Image'
import { SocialMediaIcons } from '@/src/ui/components/SocialMediaIcon'
import { Text } from '@/src/ui/components/Text'

export const ConcursanteListItem = ({ candidate }: { candidate: Candidate }) => {
  const router = useRouter()

  return (
    <View style={styles.card}>
      <ImageContent url={candidate.photo} />

      <Text fontFamily='LatoBold' size='md'>
        {candidate.name}
      </Text>

      <View style={styles.description}>
        <Text
          fontFamily='LatoRegular'
          color='blueDarker'
          numberOfLines={2}
          ellipsizeMode='middle'
          style={{ flexShrink: 1 }}>
          {candidate.description}
        </Text>

        <Button onPress={() => router.push(`/concursante/${candidate.id}`)}>
          <Text fontFamily='LatoRegular' color='blue'>
            Ver más
          </Text>
        </Button>
      </View>

      <SocialMediaIcons social={candidate.social} />

      <Button onPress={() => {}} style={styles.rectangle}>
        <Text fontFamily='LatoRegular' color='blue'>
          Votar favorita
        </Text>
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
  description: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
})
