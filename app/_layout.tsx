/* eslint-disable @typescript-eslint/no-require-imports */
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { useEffect } from 'react'
import { buildModules, registerModules } from '@/src/di/moduleContainer'

registerModules(buildModules())

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Merriweather-Bold': require('../assets/fonts/Merriweather-Bold.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='(tabs)' />
      <Stack.Screen name='concursante/id' />
    </Stack>
  )
}
