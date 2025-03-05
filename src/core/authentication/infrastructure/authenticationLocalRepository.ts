import { axiosClient } from '../../shared/network/infrastructure/networkClient'
import { LoginInput } from '../domain/loginInput'
import { SignInInput } from '../domain/signinInput'
import { AuthenticationRepository } from '@/src/core/authentication/domain/authenticationRepository'

export const authenticationLocalRepository = (): AuthenticationRepository => {
  const client = axiosClient({ baseUrl: '' })

  return {
    login: input => {
      return client.post<void, LoginInput>('/login', input)
    },
    signIn: input => {
      return client.post<void, SignInInput>('/signIn', input)
    },
  }
}
