import type { CandidatesRepository } from '@/src/core/candidates/domain/candidatesRepository'
import { candidatesLocalRepository } from '@/src/core/candidates/infrastructure/candidatesLocalRepository'
import type { GetAllCandidates } from '@/src/core/candidates/useCases/getAllCandidates'
import { getAllCandidates } from '@/src/core/candidates/useCases/getAllCandidates'
import type { GetCandidate } from '@/src/core/candidates/useCases/getCandidate'
import { getCandidate } from '@/src/core/candidates/useCases/getCandidate'
import { asFunction } from '@/src/di/resolvers'

export const candidatesModule = {
  candidatesRepository: asFunction<CandidatesRepository>(candidatesLocalRepository),
  getAllCandidates: asFunction<GetAllCandidates>(getAllCandidates),
  getCandidate: asFunction<GetCandidate>(getCandidate),
}
