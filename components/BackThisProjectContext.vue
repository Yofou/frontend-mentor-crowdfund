<template>
  <div class="flex flex-col gap-6">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
///// props/emits /////
defineProps();

///// refs, provide or inject then variables /////
const key = defineModel<string>()
provide('backKey', key)

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
