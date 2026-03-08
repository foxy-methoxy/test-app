<template>
  <v-card>
    <BaseImg
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      :alt="movie.title"
      width="100%"
      height="300"
      placeholder="https://via.placeholder.com/500x750?text=No+Image"
    />
    <v-card-title>{{ movie.title }}</v-card-title>
    <v-card-subtitle>Rating: {{ movie.vote_average }}</v-card-subtitle>
  </v-card>
</template>
<script setup lang="ts">
import BaseImg from '@/components/base/BaseImg.vue'
import type { Movie } from '@/types/movie'

defineProps<{
  movie: Movie
}>()
</script>
