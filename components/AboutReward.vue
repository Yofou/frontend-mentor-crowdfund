<template>
  <div class="p-6 sm:p-8 sm:pt-[2.37rem] border border-black-full/15 rounded-[.5rem] mt-6 flex flex-col gap-6">
    <div class="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <h3 class="body-xs sm:heading-s font-bold text-black-full">{{ props.pledge }}</h3>
      <p class="body-xs sm:body-s text-cyan-300 sm:text-right font-medium">
        Pledge ${{ amount }} or more
      </p>
    </div>

    <p class="text-grey-900 body-xs sm:body-m leading-[1.5rem] sm:leading-[1.875rem]">
      <slot />
    </p>

    <div class="w-full flex flex-col items-start sm:items-center gap-6 sm:flex-row sm:justify-between">
      <p class="text-black-full heading-l font-bold flex items-center gap-2">
        {{ props.quantity }} <span class="body-s font-normal text-grey-900">left</span>
      </p>
      <Button :class="{ '!bg-grey-1500 opacity-50 cursor-no-drop': isOutOfStock }" :disabled="isOutOfStock" @click="onClick">
        <span v-if="isOutOfStock">Out of stock</span>
        <span v-else>Select Reward</span>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/components/form/Button.vue";
///// props/emits /////
const props = defineProps<{
  pledge: string;
  amount: number;
  quantity: number;
}>();

const emits = defineEmits<{
  (e: 'reward'): void;
}>()

///// refs, provide or inject then variables /////

///// computed /////
const isOutOfStock = computed(() => {
  return props.quantity === 0;
})

///// methods /////
const onClick = () => {
  if (!isOutOfStock.value) {
    emits('reward')
  }
}

///// watchers /////

///// lifecycle /////
</script>
