<script setup lang="ts">
import BaseForm from '../base/BaseForm.vue'
import BaseInput from '../base/BaseInput.vue'
import BaseButton from '../base/BaseButton.vue'
import { ref } from 'vue'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'

const { login } = useAuthStore()
const username = ref('')
const password = ref('')

const loginUser = async () => {
  try {
    await login(username.value, password.value)
    router.push({ name: 'home' })
  } catch (error) {
    console.error('Login failed:', error)
    alert('Login failed. Please check your credentials and try again.')
  }
}
</script>

<template>
  <BaseForm @submit="loginUser">
    <BaseInput placeholder="Username" v-model="username" />
    <BaseInput placeholder="Password" v-model="password" type="password" />
    <BaseButton type="submit">Login</BaseButton>
  </BaseForm>
</template>
