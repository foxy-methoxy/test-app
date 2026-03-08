<template>
  <v-form @submit.prevent="() => $emit('submit')">
    <slot />
  </v-form>
</template>
<script setup lang="ts">
defineEmits<{
  submit: []
}>()
</script>
