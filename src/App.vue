<script setup lang="ts">
import { useSnackbar } from '@/composables/useSnackbar'

const { show, message, type } = useSnackbar()
</script>

<template>
  <v-app>
    <router-view />
    <v-snackbar v-model="show" :timeout="3000" :color="type">
      {{ message }}
    </v-snackbar>
  </v-app>
</template>

<style scoped></style>
