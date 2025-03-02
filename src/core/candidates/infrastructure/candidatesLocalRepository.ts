import { Candidate } from '@/src/core/candidates/domain/candidate'
import { CandidatesRepository } from '@/src/core/candidates/domain/candidatesRepository'

export const candidatesLocalRepository = (): CandidatesRepository => {
  const repository = {
    getAll: () => {
      return candidates
    },
    getCandidate: (id: string) => {
      const candidates = repository.getAll()
      return candidates.find(candidate => candidate.id === id)
    },
  }

  return repository
}

const candidates: Candidate[] = [
  {
    id: '1',
    name: 'Earnest Green',
    photo:
      'https://plus.unsplash.com/premium_photo-1664537980500-30bb5ec506e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYSUyMGRlJTIwbXVqZXJ8ZW58MHx8MHx8fDA%3D',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt im veniam',
    social: {
      facebook: '',
      twitter: '',
      instagram: '',
    },
  },
  {
    id: '2',
    name: 'Winston Orn',
    photo:
      'https://plus.unsplash.com/premium_photo-1664537980500-30bb5ec506e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYSUyMGRlJTIwbXVqZXJ8ZW58MHx8MHx8fDA%3D',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt im veniam',
    social: {
      facebook: '',
      twitter: '',
      instagram: '',
    },
  },
  {
    id: '3',
    name: 'Carlton Collins',
    photo:
      'https://plus.unsplash.com/premium_photo-1664537980500-30bb5ec506e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYSUyMGRlJTIwbXVqZXJ8ZW58MHx8MHx8fDA%3D',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt im veniam',
    social: {
      facebook: '',
      twitter: '',
      instagram: '',
    },
  },
  {
    id: '4',
    name: 'Malcolm Labadie',
    photo:
      'https://plus.unsplash.com/premium_photo-1664537980500-30bb5ec506e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYSUyMGRlJTIwbXVqZXJ8ZW58MHx8MHx8fDA%3D',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt im veniam',
    social: {
      facebook: '',
      twitter: '',
      instagram: '',
    },
  },
  {
    id: '5',
    name: 'Michelle Dare',
    photo:
      'https://plus.unsplash.com/premium_photo-1664537980500-30bb5ec506e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYSUyMGRlJTIwbXVqZXJ8ZW58MHx8MHx8fDA%3D',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt im veniam',
    social: {
      facebook: '',
      twitter: '',
      instagram: '',
    },
  },
  {
    id: '6',
    name: 'Carlton Zieme',
    photo:
      'https://plus.unsplash.com/premium_photo-1664537980500-30bb5ec506e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYSUyMGRlJTIwbXVqZXJ8ZW58MHx8MHx8fDA%3D',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt im veniam',
    social: {
      facebook: '',
      twitter: '',
      instagram: '',
    },
  },
  {
    id: '7',
    name: 'Jessie Dickinson',
    photo:
      'https://plus.unsplash.com/premium_photo-1664537980500-30bb5ec506e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYSUyMGRlJTIwbXVqZXJ8ZW58MHx8MHx8fDA%3D',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt im veniam',
    social: {
      facebook: '',
      twitter: '',
      instagram: '',
    },
  },
  {
    id: '8',
    name: 'Julian Gulgowski',
    photo:
      'https://plus.unsplash.com/premium_photo-1664537980500-30bb5ec506e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYSUyMGRlJTIwbXVqZXJ8ZW58MHx8MHx8fDA%3D',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt im veniam',
    social: {
      facebook: '',
      twitter: '',
      instagram: '',
    },
  },
]
