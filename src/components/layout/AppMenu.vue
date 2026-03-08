<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn icon v-bind="props">
        <v-icon size="48">mdi-account-circle</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item link to="/profile">
        <v-list-item-title>My Profile</v-list-item-title>
      </v-list-item>
      <v-list-item @click="logout">
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/login')
}
</script>
