import { AuthenticationRepository } from '../domain/authenticationRepository'
import { SignInInput } from '../domain/signinInput'

export type SignIn = ReturnType<typeof signIn>

export const signIn = ({ authenticationRepository }: { authenticationRepository: AuthenticationRepository }) => {
  return (input: SignInInput) => {
    authenticationRepository.signIn(input)
  }
}
