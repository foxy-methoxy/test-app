<template>
  <v-container v-bind="$attrs">
    <v-tabs v-model="model">
      <v-tab v-for="(tab, index) in tabs" :key="index" :value="tab">
        {{ tab }}
      </v-tab>
    </v-tabs>
    <v-window v-model="model">
      <v-window-item v-for="(tab, index) in tabs" :key="index" :value="tab">
        <keep-alive>
          <slot :tab="tab" />
        </keep-alive>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup lang="ts" generic="T extends string">
defineProps<{
  tabs: T[]
}>()
defineOptions({ inheritAttrs: false })

const model = defineModel<string>({ required: true })
</script>
