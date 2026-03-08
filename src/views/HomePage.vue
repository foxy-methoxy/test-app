<template>
  <v-container class="mt-5">
    <MoviesSearch class="mb-6" />
    <BaseTabs :tabs="tabs" v-model="activeTab" class="mb-4">
      <template #default="{ tab }">
        <MovieTabContent :category="tab" :key="tab" />
      </template>
    </BaseTabs>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import BaseTabs from '@/components/base/BaseTabs.vue'
import { MovieCategory } from '@/types/movie'
import MovieTabContent from '@/components/Movie/MovieTabContent.vue'
import MoviesSearch from '@/components/Movie/MoviesSearch.vue'

const activeTab = ref(MovieCategory.Popular)
const tabs: MovieCategory[] = [
  MovieCategory.Popular,
  MovieCategory.TopRated,
  MovieCategory.Upcoming,
  MovieCategory.NowPlaying,
]
</script>
