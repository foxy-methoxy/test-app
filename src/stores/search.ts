import { defineStore } from 'pinia'
import { ref } from 'vue'
import { searchMovies } from '@/api/search'
import type { Movie } from '@/types/movie'

export const useSearchStore = defineStore('search', () => {
  const searchResults = ref<Movie[]>([])
  const loading = ref(false)

  const search = async (query: string) => {
    try {
      loading.value = true
      const data = await searchMovies(query)
      searchResults.value = data.results
    } finally {
      loading.value = false
    }
  }
  return {
    searchResults,
    loading,
    search,
  }
})
