import type { AuthenticationRepository } from '@/src/core/authentication/domain/authenticationRepository'
import { authenticationLocalRepository } from '@/src/core/authentication/infrastructure/authenticationLocalRepository'
import type { Login } from '@/src/core/authentication/useCases/login'
import { login } from '@/src/core/authentication/useCases/login'
import type { SignIn } from '@/src/core/authentication/useCases/signIn'
import { signIn } from '@/src/core/authentication/useCases/signIn'
import { asFunction } from '@/src/di/resolvers'

export const authenticationModule = {
  authenticationRepository: asFunction<AuthenticationRepository>(authenticationLocalRepository),
  login: asFunction<Login>(login),
  signIn: asFunction<SignIn>(signIn),
}
