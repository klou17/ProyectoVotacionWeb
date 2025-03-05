import { Result } from '../../shared/network/domain/AxiosClient'
import { LoginInput } from './loginInput'
import { SignInInput } from './signinInput'

export interface AuthenticationRepository {
  login: (input: LoginInput) => Promise<Result<void>>
  signIn: (input: SignInInput) => Promise<Result<void>>
}
