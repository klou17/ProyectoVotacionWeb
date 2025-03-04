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
        style={{ ...styles.button, backgroundColor: isSignIn ? color.white : 'transparent' }}>
        <Text fontFamily='LatoBold' color={isSignIn ? 'blueDarker' : 'white'}>
          Sign In
        </Text>
      </Button>

      <Button
        onPress={() => setIsSignIn(false)}
        style={{ ...styles.button, backgroundColor: !isSignIn ? color.white : 'transparent' }}>
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
    backgroundColor: color.blueDarker,
    borderRadius: 16,
    padding: 6,
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  },
  button: {
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 64,
    alignItems: 'center',
  },
})
