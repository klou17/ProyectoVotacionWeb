import { createContainer } from 'awilix'
import { authenticationModule } from '@/src/core/authentication/di/authenticationModule'
import { candidatesModule } from '@/src/core/candidates/di/candidatesModule'

// import { sharedModule } from '@/src/core/shared/di/sharedModule'

export const moduleContainer = createContainer<ModuleContainer>()

export const buildModules = () => ({
  // ...sharedModule,
  ...authenticationModule,
  ...candidatesModule,
})

type Modules = ReturnType<typeof buildModules>

export type ModuleContainer = {
  [P in keyof Modules]: ReturnType<Modules[P]['resolve']>
}

export const registerModules = (modulesToRegister: Modules) => {
  moduleContainer.register(modulesToRegister)
}
