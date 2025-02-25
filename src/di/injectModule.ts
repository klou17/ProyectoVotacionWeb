import type { ModuleContainer } from '@/src/di/moduleContainer'
import { moduleContainer } from '@/src/di/moduleContainer'

export const injectModule = <ModuleKey extends keyof ModuleContainer>(
  dependency: ModuleKey,
): ModuleContainer[ModuleKey] => {
  return moduleContainer.resolve(dependency)
}
