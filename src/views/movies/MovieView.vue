<template>
  <v-container class="mt-5">
    <v-progress-linear v-if="loading" indeterminate />
    <v-row v-else-if="movie">
      <v-col cols="12" md="4">
        <BaseImg
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          :alt="movie.title"
          rounded="lg"
        />
      </v-col>
      <v-col cols="12" md="8">
        <h1 class="text-h3 mb-3">{{ movie.title }}</h1>
        <p class="text-subtitle-1 mb-2">Release Date: {{ movie.release_date }}</p>
        <p class="text-subtitle-1 mb-4">Rating: {{ movie.vote_average }}/10</p>
        <p>{{ movie.overview }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'
import BaseImg from '@/components/base/BaseImg.vue'

const route = useRoute()
const moviesStore = useMoviesStore()
const { currentMovie: movie, loading } = storeToRefs(moviesStore)

onMounted(() => {
  moviesStore.getMovieById(Number(route.params.id))
})
</script>
