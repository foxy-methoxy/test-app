<template>
  <v-autocomplete
    v-model="model"
    v-model:search="search"
    :items="searchResults"
    :loading="isLoading"
    :label="label"
    :item-title="itemTitle"
    :item-value="itemValue"
    hide-no-data
    hide-details
    no-filter
  >
    <template #item="{ props, item }">
      <slot name="item" :props="props" :item="item" />
    </template>
  </v-autocomplete>
</template>

<script setup lang="ts" generic="T">
defineProps<{
  label?: string
  isLoading?: boolean
  searchResults?: T[]
  itemTitle?: string
  itemValue?: string
}>()

const model = defineModel<T | null>({ default: null })
const search = defineModel<string>('search')
</script>
