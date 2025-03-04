export interface AuthenticationRepository {
  login: () => Promise<void>
}
