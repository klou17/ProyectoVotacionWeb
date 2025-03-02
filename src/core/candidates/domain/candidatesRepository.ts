import type { Candidate } from './candidate'

export interface CandidatesRepository {
  getAll: () => Candidate[]
  getCandidate: (id: string) => Candidate | undefined
}
