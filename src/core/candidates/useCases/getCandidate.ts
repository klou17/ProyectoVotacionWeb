import type { CandidatesRepository } from '@/src/core/candidates/domain/candidatesRepository'

export type GetCandidate = ReturnType<typeof getCandidate>

export const getCandidate =
  ({ candidatesRepository }: { candidatesRepository: CandidatesRepository }) =>
  (id: string) =>
    candidatesRepository.getCandidate(id)
