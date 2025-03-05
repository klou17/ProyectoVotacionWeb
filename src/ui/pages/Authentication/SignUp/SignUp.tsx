import { View } from 'react-native'
import { PrimaryButton } from '@/src/ui/components/Button/PrimaryButton'
import { TextInput } from '@/src/ui/components/TextInput'

export const SignUp = () => {
  return (
    <View style={{ gap: 24 }}>
      <TextInput placeholder='Nombre' />
      <TextInput placeholder='Apellidos' />
      <TextInput placeholder='Correo Electrónico' />
      <TextInput placeholder='Contraseña' isSecureEntry={true} />
      <TextInput placeholder='Confirmar contraseña' isSecureEntry={true} />
      <PrimaryButton
        title={'Crear cuenta'}
        isLoading={false}
        onPress={() => alert('Sign Up Submitted')}></PrimaryButton>
    </View>
  )
}
