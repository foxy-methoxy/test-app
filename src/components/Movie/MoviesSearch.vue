<template>
  <BaseSearch
    v-model="selectedId"
    v-model:search="query"
    :searchResults="searchResults"
    :isLoading="loading"
    label="Search Movies"
    item-title="title"
    item-value="id"
  >
    <template #item="{ props, item: internalItem }">
      <v-list-item
        v-bind="props"
        :subtitle="internalItem.release_date"
        @click="onSelect(internalItem.id)"
      >
        <template #prepend>
          <v-avatar rounded>
            <v-img
              :src="
                internalItem.poster_path
                  ? `https://image.tmdb.org/t/p/w92${internalItem.poster_path}`
                  : '/placeholder.svg'
              "
            />
          </v-avatar>
        </template>
      </v-list-item>
    </template>
  </BaseSearch>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useSearchStore } from '@/stores/search'
import { storeToRefs } from 'pinia'
import { useDebounceFn } from '@vueuse/core'
import type { Movie } from '@/types/movie'
import BaseSearch from '@/components/base/BaseSearch.vue'

const router = useRouter()
const searchStore = useSearchStore()
const { searchResults, loading } = storeToRefs(searchStore)

const selectedId = ref<Movie | null>(null)
const query = ref('')

const debouncedSearch = useDebounceFn((value: string) => {
  searchStore.search(value)
}, 300)

watch(query, (value) => {
  if (value) debouncedSearch(value)
})

const onSelect = (id: number) => {
  router.push({ name: 'movie', params: { id } })
}
</script>
