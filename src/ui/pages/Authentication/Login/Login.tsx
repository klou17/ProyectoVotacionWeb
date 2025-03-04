import { useRouter } from 'expo-router'
import { View } from 'react-native'
import { PrimaryButton } from '@/src/ui/components/Button/PrimaryButton'
import { TextInput } from '@/src/ui/components/TextInput'
import { useAuth } from '@/src/ui/providers/Providers'

export const Login = () => {
  const { login } = useAuth()
  const router = useRouter()
  const handleLogin = () => {
    login({ user: { name: 'usuario' } })
    router.replace('/(tabs)')
  }
  return (
    <View style={{ gap: 24 }}>
      <TextInput placeholder='Correo electrónico' />
      <TextInput placeholder='Contraseña' isSecureEntry={true} />
      <PrimaryButton title={'Iniciar sesión'} onPress={() => handleLogin()} />
    </View>
  )
}
