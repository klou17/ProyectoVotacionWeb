import { Slot, useRouter } from 'expo-router'
import { useAtom } from 'jotai'
import { ReactNode, useEffect } from 'react'
import { User } from '@/src/core/authentication/domain/user'
import { userAtom } from '@/src/ui/atoms/userAtom'

interface Props {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useAtom(userAtom)
  const router = useRouter()

  // Simulación de verificación de sesión al montar el componente
  useEffect(() => {
    const checkAuth = async () => {
      const fakeUser = null // Simulación de usuario no autenticado
      setUser(fakeUser)

      if (!fakeUser) {
        router.replace('/authentication') // Redirigir al login si no está autenticado
      }
    }

    checkAuth()
  }, [])

  if (!user) return <Slot /> // TODO: revisar que vista o que mostraremos

  return children
}

// Hook para usar autenticación sin `createContext`
export const useAuth = () => {
  const [user, setUser] = useAtom(userAtom)

  const login = (userData: { user: User }) => setUser(userData)
  const logout = () => setUser(null)

  return { user, login, logout }
}
