import { useRouter } from 'expo-router'
import { useAtomValue } from 'jotai'
import { ReactNode, useEffect } from 'react'
import { userAtom } from '@/src/ui/atoms/userAtom'

interface Props {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const user = useAtomValue(userAtom)
  const router = useRouter()

  useEffect(() => {
    if (user == null) {
      router.replace('/authentication')
    }
  }, [])

  return children
}
