<template>
  <v-text-field :type="type" :placeholder="placeholder" v-model="model" />
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'text' | 'password'
    placeholder?: string
  }>(),
  {
    type: 'text',
  },
)

const model = defineModel<string>()
</script>
