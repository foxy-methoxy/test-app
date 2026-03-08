<template>
  <v-btn color="primary" :type="type">
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'button' | 'submit'
  }>(),
  {
    type: 'button',
  },
)
</script>
