<template>
  <v-container class="mt-15">
    <h1 class="text-h4 mb-4">User Profile</h1>
    <!-- <p class="text-subtitle-1 mb-2">Username: {{ user.username }}</p>
    <p class="text-subtitle-1 mb-2">Email: {{ user.email }}</p>
    <p class="text-subtitle-1 mb-2">Member since: {{ formattedDate }}</p> -->
  </v-container>
</template>
<script setup lang="ts">
// import { computed } from 'vue'
// import { useAuthStore } from '@/stores/auth'
// import { storeToRefs } from 'pinia'

// const { user } = storeToRefs(useAuthStore())

// const formattedDate = computed(() => {
//   if (!user.value?.created_at) return ''
//   const date = new Date(user.value.created_at)
//   return date.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   })
// })
</script>
