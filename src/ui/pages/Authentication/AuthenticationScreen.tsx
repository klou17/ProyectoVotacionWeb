import { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ImagesType } from '@/assets/images/ImageType'
import { ImageBackground } from '@/src/ui/components/Images/ImageBackground'
import { Text } from '@/src/ui/components/Text'
import { VerticalLine } from '@/src/ui/components/VerticalLine'
import { TabButtons } from '@/src/ui/pages/Authentication/components/TabButtons'
import { Login } from '@/src/ui/pages/Authentication/Login/Login'
import { SignUp } from '@/src/ui/pages/Authentication/SignUp/SignUp'
import { color } from '@/src/ui/styles/color'

export const AuthenticationScreen = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <ImageBackground source={ImagesType.loginWallpaper}>
      <View style={styles.overlay}></View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <TabButtons isSignIn={isSignIn} setIsSignIn={setIsSignIn} />

          <View style={styles.formContainer}>
            <View style={styles.formColumn}>{isSignIn ? <Login /> : <SignUp />}</View>
            <VerticalLine />
            <View style={styles.formColumn}>
              <Text fontFamily='LatoBold' color={'blueDarker'}>
                Elige a tu participante favorito y vota por él/ella
              </Text>
            </View>
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
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 0.6,
    backgroundColor: color.beige,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 24,
    gap: 16,
    borderRadius: 16,
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  },
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  formColumn: {
    flex: 1,
    padding: 16,
  },
})
