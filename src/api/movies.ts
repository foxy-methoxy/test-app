import type { Movie, MovieDetail, MoviesResponse } from '@/types/movie'
import api from './axios'

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await api.get<MoviesResponse>('/movie/popular')
  return response.data.results
}

export const getTopRatedMovies = async (): Promise<Movie[]> => {
  const response = await api.get<MoviesResponse>('/movie/top_rated')
  return response.data.results
}

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  const response = await api.get<MoviesResponse>('/movie/upcoming')
  return response.data.results
}

export const getNowPlayingMovies = async (): Promise<Movie[]> => {
  const response = await api.get<MoviesResponse>('/movie/now_playing')
  return response.data.results
}

export const getMovieDetails = async (id: number): Promise<MovieDetail> => {
  const response = await api.get<MovieDetail>(`/movie/${id}`)
  return response.data
}
