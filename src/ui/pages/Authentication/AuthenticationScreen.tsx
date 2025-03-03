// import { useAuth } from '../../providers/Providers'
// import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Button, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Login } from './Login.tsx/Login'
import { SignUp } from './SignUp.tsx/SignUp'

/* eslint-disable @typescript-eslint/no-require-imports */
const wallpaper = require('@/assets/images/login-wallpaper.jpg')

export const AuthenticationScreen = () => {
  // const { login } = useAuth()
  // const router = useRouter()
  const [isSignIn, setIsSignIn] = useState(true)

  // const handleLogin = () => {
  //   login({ user: { name: 'usuario' } })
  //   router.replace('/(tabs)')
  // }

  return (
    <ImageBackground source={wallpaper} resizeMode='cover' style={styles.image}>
      <View style={styles.overlay}></View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Button to switch between Sign In and Sign Up */}
        <View style={styles.buttonContainer}>
          <Button
            title='Sign In'
            onPress={() => setIsSignIn(true)}
            color={isSignIn ? '#3498db' : '#95a5a6'} // Highlight selected button
          />
          <Button
            title='Sign Up'
            onPress={() => setIsSignIn(false)}
            color={!isSignIn ? '#3498db' : '#95a5a6'} // Highlight selected button
          />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formColumn}>{isSignIn ? <Login /> : <SignUp />}</View>
          <View style={styles.verticleLine}></View>
          <View style={styles.formColumn}>
            <View>
              <Text>Elige a tu participante favorito y vota por él/ella</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for the wallpaper
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 16,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 400,
    justifyContent: 'center',
  },
  formContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 16,
    // width: '100%',
    // maxWidth: 400,
    // padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', // Simulate shadow effect
  },
  formColumn: {
    flex: 1, // Makes each column take 50% of the available space
    padding: 16,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
})
