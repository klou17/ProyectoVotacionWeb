import { atom } from 'jotai'
import { User } from '@/src/core/authentication/domain/user'

export const userAtom = atom<{ user: User } | null>(null)
