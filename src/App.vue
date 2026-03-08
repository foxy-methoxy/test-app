<script setup lang="ts">
import { useSnackbar } from '@/composables/useSnackbar'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

const { show, message, type } = useSnackbar()
const { isAuthenticated } = storeToRefs(useAuthStore())
</script>

<template>
  <v-app>
    <AppNavbar v-if="isAuthenticated" />
    <router-view />
    <v-snackbar v-model="show" :timeout="3000" :color="type">
      {{ message }}
    </v-snackbar>
  </v-app>
</template>

<style scoped></style>
