import { ImageBackground } from '../../components/ImageBackground'
import { VerticalLine } from '../../components/VerticalLine'
import { color } from '../../styles/color'
import { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from '@/src/ui/components/Text'
import { TabButtons } from './components/TabButtons'
import { Login } from './Login.tsx/Login'
import { SignUp } from './SignUp.tsx/SignUp'

/* eslint-disable @typescript-eslint/no-require-imports */
const wallpaper = require('@/assets/images/login-wallpaper.jpg')

export const AuthenticationScreen = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <ImageBackground source={wallpaper}>
      <View style={styles.overlay}></View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TabButtons isSignIn={isSignIn} setIsSignIn={setIsSignIn}></TabButtons>
        <View style={styles.formContainer}>
          <View style={styles.formColumn}>{isSignIn ? <Login /> : <SignUp />}</View>
          <VerticalLine />
          <View style={styles.formColumn}>
            <Text fontFamily='LatoBold' color={'blueDarker'}>
              Elige a tu participante favorito y vota por él/ella
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
    backgroundColor: color.black,
  },
  scrollViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 24,
  },
  formContainer: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 16,
    backgroundColor: color.beige,
    borderTopRightRadius: 10,
    borderEndStartRadius: 10,
    borderEndEndRadius: 10,
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  },
  formColumn: {
    flex: 1,
    padding: 16,
  },
})
