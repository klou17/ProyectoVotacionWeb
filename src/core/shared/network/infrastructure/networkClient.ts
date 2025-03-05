import { NetworkClient, Result } from '../domain/AxiosClient'
import axios from 'axios'

interface Options {
  baseUrl: string
}

export const axiosClient = (options: Options): NetworkClient => {
  const axiosInstance = axios.create({
    baseURL: options.baseUrl,
  })

  return {
    async get<T>(url: string): Promise<Result<T>> {
      try {
        const response = await axiosInstance.get<T>(url)
        return { data: response.data, error: null }
      } catch {
        return { data: null, error: 'Something went wrong' }
      }
    },

    async post<T, U>(url: string, data: U): Promise<Result<T>> {
      try {
        const response = await axiosInstance.post<T>(url, data)
        return { data: response.data, error: null }
      } catch {
        return { data: null, error: 'Something went wrong' }
      }
    },
  }
}
