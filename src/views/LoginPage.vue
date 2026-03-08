<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue'
</script>
<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh">
    <v-sheet width="400" rounded="lg" elevation="3" class="pa-6">
      <LoginForm />
    </v-sheet>
  </v-container>
</template>
