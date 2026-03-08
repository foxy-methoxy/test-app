import { authenticateUser } from '@/api/auth'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const sessionId = ref<string | null>(localStorage.getItem('session_id'))
  const isAuthenticated = computed(() => !!sessionId.value)

  const login = async (username: string, password: string) => {
    sessionId.value = await authenticateUser(username, password)
  }

  const logout = () => {
    sessionId.value = null
    localStorage.removeItem('session_id')
  }

  return {
    sessionId,
    isAuthenticated,
    login,
    logout,
  }
})
