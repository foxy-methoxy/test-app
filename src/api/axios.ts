import { SnackbarType, useSnackbar } from '@/composables/useSnackbar'
import axios, { type AxiosInstance } from 'axios'
import router from '@/router'

export class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
    this.name = 'ApiError'
  }
}

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { showSnackbar } = useSnackbar()
    const status = error.response?.status
    const message = error.response?.data?.status_message || 'An error occurred'

    if (!error.response) {
      showSnackbar('Network error. Please check your connection.', SnackbarType.ERROR)
      return Promise.reject(new ApiError('Network error', 0))
    }

    if (status === 401) {
      localStorage.removeItem('session_id')
      router.push('/login')
      showSnackbar('Session expired. Please log in again.', SnackbarType.ERROR)
      return Promise.reject(new ApiError('Unauthorized', status))
    }

    showSnackbar(message, SnackbarType.ERROR)
    return Promise.reject(new ApiError(message, status))
  },
)

export default api
