<template>
  <button class="px-8 pt-[0.94rem] pb-4 bg-cyan-300 hover:bg-cyan-600 transition-colors body-xs text-white-full font-bold rounded-full disabled:bg-grey-1500/20" @click="onClick" :disabled="disabled">
    <slot />
  </button>
</template>

<script lang="ts" setup>
///// props/emits /////
defineProps<{
  disabled?: boolean;
}>();

const emits = defineEmits<{
  (e: 'click'): void;
}>()

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////
const onClick = () => {
  emits('click')
}

///// watchers /////

///// lifecycle /////
</script>
