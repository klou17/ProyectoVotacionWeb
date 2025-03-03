import { AuthenticationRepository } from '@/src/core/authentication/domain/authenticationRepository'

export const authenticationLocalRepository = (): AuthenticationRepository => {
  const repository = {
    async login(): Promise<void> {
      try {
        // Implementar lógica
        console.log('Usuario autenticado')
      } catch (error) {
        console.error('Error en login:', error)
      }
    },
  }

  return repository
}
