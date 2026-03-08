<template>
  <v-progress-circular v-if="loading" indeterminate color="primary" class="my-5" />
  <MovieGrid v-else :movies="moviesMap[category]" />
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'
import { MovieCategory } from '@/types/movie'
import MovieGrid from './MovieGrid.vue'

const props = defineProps<{ category: MovieCategory }>()

const moviesStore = useMoviesStore()
const { popularMovies, topRatedMovies, upcomingMovies, nowPlayingMovies, loading } =
  storeToRefs(moviesStore)

const fetchMap: Record<MovieCategory, () => void> = {
  [MovieCategory.Popular]: () => moviesStore.fetchPopularMovies(),
  [MovieCategory.TopRated]: () => moviesStore.fetchTopRatedMovies(),
  [MovieCategory.Upcoming]: () => moviesStore.fetchUpcomingMovies(),
  [MovieCategory.NowPlaying]: () => moviesStore.fetchNowPlayingMovies(),
}

const moviesMap = computed(() => ({
  [MovieCategory.Popular]: popularMovies.value,
  [MovieCategory.TopRated]: topRatedMovies.value,
  [MovieCategory.Upcoming]: upcomingMovies.value,
  [MovieCategory.NowPlaying]: nowPlayingMovies.value,
}))

onMounted(() => {
  const movies = moviesMap.value[props.category]
  if (!movies.length) fetchMap[props.category]()
})
</script>
