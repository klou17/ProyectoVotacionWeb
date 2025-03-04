import { color } from '../../styles/color'
import { StyleSheet } from 'react-native'
import { Button } from '@/src/ui/components/Button/Button'
import { Text } from '@/src/ui/components/Text'

interface Props {
  title: string
  onPress: () => void
}

export const PrimaryButton = ({ title, onPress }: Props) => {
  return (
    <Button style={styles.button} onPress={onPress}>
      <Text fontFamily={'LatoBold'} color={'white'}>
        {title}
      </Text>
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
