<template>
  <v-app-bar app color="surface" dark>
    <v-btn text to="/" class="text-h6">Home</v-btn>
    <v-spacer />
    <MoviesSearch />
    <v-spacer />
    <AppMenu />
  </v-app-bar>
</template>
<script setup lang="ts">
import MoviesSearch from '@/components/Movie/MoviesSearch.vue'
import AppMenu from '@/components/layout/AppMenu.vue'
</script>
