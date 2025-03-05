export interface Result<T> {
  data: T | null
  error: string | null
}

export interface NetworkClient {
  get<T>(url: string): Promise<Result<T>>
  post<T, U>(url: string, data: U): Promise<Result<T>>
}
