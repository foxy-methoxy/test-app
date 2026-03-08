<template>
  <v-row class="mt-2">
    <v-col v-for="movie in movies" :key="movie.id" cols="12" sm="6" md="4" lg="3">
      <MovieCard :movie="movie" @click="goToMovie(movie.id)" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Movie } from '@/types/movie'
import MovieCard from './MovieCard.vue'

defineProps<{ movies: Movie[] }>()

const router = useRouter()
const goToMovie = (id: number) => {
  router.push({ name: 'movie', params: { id } })
}
</script>
