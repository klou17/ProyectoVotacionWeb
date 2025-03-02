import type { CandidatesRepository } from '@/src/core/candidates/domain/candidatesRepository'

export type GetAllCandidates = ReturnType<typeof getAllCandidates>

export const getAllCandidates =
  ({ candidatesRepository }: { candidatesRepository: CandidatesRepository }) =>
  () =>
    candidatesRepository.getAll()
