import { ActivityIndicator, StyleSheet } from 'react-native'
import { Button } from '@/src/ui/components/Button/Button'
import { Text } from '@/src/ui/components/Text'
import { color } from '@/src/ui/styles/color'

interface Props {
  title: string
  isLoading?: boolean
  onPress: () => void
}

export const PrimaryButton = ({ title, isLoading = false, onPress }: Props) => {
  return (
    <Button style={styles.button} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text fontFamily={'LatoBold'} color={'white'}>
          {title}
        </Text>
      )}
    </Button>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.blueDarker,
    padding: 12,
    borderRadius: 16,
    alignItems: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
  },
})
