import { StyleSheet, View } from 'react-native'
import { Button } from '@/src/ui/components/Button/Button'
import { Text } from '@/src/ui/components/Text'
import { color } from '@/src/ui/styles/color'

export const TabButtons = ({
  isSignIn,
  setIsSignIn,
}: {
  isSignIn: boolean
  setIsSignIn: (isSignIn: boolean) => void
}) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => setIsSignIn(true)}
        style={{ ...styles.button, backgroundColor: isSignIn ? color.beige : color.blueDarker }}>
        <Text fontFamily='LatoBold' color={isSignIn ? 'blueDarker' : 'white'}>
          Sign In
        </Text>
      </Button>

      <Button
        onPress={() => setIsSignIn(false)}
        style={{ ...styles.button, backgroundColor: !isSignIn ? color.beige : color.blueDarker }}>
        <Text fontFamily='LatoBold' color={!isSignIn ? 'blueDarker' : 'white'}>
          Sign Up
        </Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 48,
    alignItems: 'center',
  },
})
