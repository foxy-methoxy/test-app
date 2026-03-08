import {
  getPopularMovies,
  getMovieDetails,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '@/api/movies'
import type { Movie, MovieDetail } from '@/types/movie'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMoviesStore = defineStore('movies', () => {
  const popularMovies = ref<Movie[]>([])
  const topRatedMovies = ref<Movie[]>([])
  const upcomingMovies = ref<Movie[]>([])
  const nowPlayingMovies = ref<Movie[]>([])
  const currentMovie = ref<MovieDetail | null>(null)
  const loading = ref(false)

  const fetchPopularMovies = async () => {
    try {
      loading.value = true
      const data = await getPopularMovies()
      popularMovies.value = data
    } finally {
      loading.value = false
    }
  }

  const fetchTopRatedMovies = async () => {
    try {
      loading.value = true
      const data = await getTopRatedMovies()
      topRatedMovies.value = data
    } finally {
      loading.value = false
    }
  }

  const fetchUpcomingMovies = async () => {
    try {
      loading.value = true
      const data = await getUpcomingMovies()
      upcomingMovies.value = data
    } finally {
      loading.value = false
    }
  }

  const fetchNowPlayingMovies = async () => {
    try {
      loading.value = true
      const data = await getNowPlayingMovies()
      nowPlayingMovies.value = data
    } finally {
      loading.value = false
    }
  }

  const getMovieById = async (id: number) => {
    try {
      loading.value = true
      const movie = await getMovieDetails(id)
      currentMovie.value = movie
    } finally {
      loading.value = false
    }
  }

  return {
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    nowPlayingMovies,
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
    fetchNowPlayingMovies,
    getMovieById,
    currentMovie,
    loading,
  }
})
