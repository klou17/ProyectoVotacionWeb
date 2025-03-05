export interface FetchResult<T> {
  data: T | null
  error: string | null
  isLoading: boolean
}
