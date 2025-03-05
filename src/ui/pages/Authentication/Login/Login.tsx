import { useRouter } from 'expo-router'
import { useSetAtom } from 'jotai'
import { useState } from 'react'
import { View } from 'react-native'
import { FetchResult } from '@/src/core/shared/network/domain/FetchResult'
import { injectModule } from '@/src/di/injectModule'
import { userAtom } from '@/src/ui/atoms/userAtom'
import { PrimaryButton } from '@/src/ui/components/Button/PrimaryButton'
import { TextInput } from '@/src/ui/components/TextInput'

export const Login = () => {
  const setUser = useSetAtom(userAtom)
  const router = useRouter()
  const login = injectModule('login')
  const [result, setResult] = useState<FetchResult<void>>({
    data: null,
    error: null,
    isLoading: false,
  })

  const handleLogin = async () => {
    try {
      setResult({ data: null, error: null, isLoading: true })
      const data = await login({ email: 'email', password: 'pass' })
      setResult({ data, error: null, isLoading: false })
      setUser({ user: { name: 'name' } }) // TODO: PEDIR QUE DEVUELVAN EL USUARIO
      router.replace('/(tabs)')
    } catch {
      setResult({ data: null, error: 'Something went wrong', isLoading: false })
    }
  }

  return (
    <View style={{ gap: 24 }}>
      <TextInput placeholder='Correo electrónico' />
      <TextInput placeholder='Contraseña' isSecureEntry={true} />
      <PrimaryButton title={'Iniciar sesión'} isLoading={result.isLoading} onPress={() => handleLogin()} />
    </View>
  )
}
