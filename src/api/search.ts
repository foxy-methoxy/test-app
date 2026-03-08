import api from './axios'

export const searchMovies = async (query: string) => {
  const response = await api.get('/search/movie', {
    params: {
      query,
    },
  })
  return response.data
}
