<template>
  <v-img :src="src" :alt="alt" :width="width" :height="height" class="rounded-lg" />
</template>
<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  width?: number | string
  height?: number | string
  placeholder?: string
  aspectRatio?: number
}>()
</script>
