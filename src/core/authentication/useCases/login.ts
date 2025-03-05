import { AuthenticationRepository } from '../domain/authenticationRepository'
import { LoginInput } from '../domain/loginInput'

export type Login = ReturnType<typeof login>

export const login = ({ authenticationRepository }: { authenticationRepository: AuthenticationRepository }) => {
  return async (input: LoginInput) => {
    authenticationRepository.login(input)
  }
}
