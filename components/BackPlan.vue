<template>
  <div
    class="outline outline-2 outline-black-full/5 transition-[outline] rounded-[.5rem]"
    :class="{ 'outline-cyan-300': isActive }"
  >
    <button
      class="px-7 py-8 grid grid-cols-[max-content,1fr] text-start gap-6 group disabled:opacity-50 disabled:pointer-events-none"
      @click="onPlanClick"
      :disabled="isDisabled"
    >
      <div
        class="w-6 h-6 rounded-full border self-center sm:self-start border-black-full/5 grid place-items-center"
      >
        <div v-if="isActive" class="w-3 h-3 rounded-full bg-cyan-300" />
      </div>

      <div class="contents sm:flex flex-col gap-4">
        <div
          class="self-center sm:self-start grid grid-cols-1 grid-rows-[max-content,max-content] sm:grid-rows-1 sm:grid-cols-[max-content,max-content,1fr] gap-2 sm:gap-[1.06rem]"
        >
          <h2
            class="body-m font-bold text-black-full group-hover:text-cyan-300 transition-colors"
          >
            {{ props.pledge }}
          </h2>
          <p
            v-if="props.amount != null"
            class="body-m text-cyan-300 font-medium"
          >
            Pledge ${{ props.amount }} or more
          </p>

          <p
            v-if="props.amount != null"
            class="hidden sm:block text-right heading-s text-black-full font-bold"
          >
            {{ props.quantity }}
            <span class="text-grey-900 body-s font-normal ml-2">left</span>
          </p>
        </div>
        <div class="flex flex-col gap-6 col-start-1 col-end-3">
          <p class="text-grey-900 body-s leading-[1.75rem]">
          {{ props.description }}
        </p>
        <p
          v-if="props.amount != null"
          class="sm:hidden text-left heading-s text-black-full font-bold"
        >
          {{ props.quantity }}
          <span class="text-grey-900 body-s font-normal ml-2">left</span>
        </p>
        </div>
      </div>
    </button>
    <div
      class="w-full h-full grid grid-rows-[0fr] grid-cols-1 transition-[grid-template-rows]"
      :class="{ '!grid-rows-[1fr]': isActive }"
    >
      <div class="overflow-hidden">
        <div
          class="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0 p-6 sm:px-7 sm:py-6 border-t border-black-full/5"
        >
          <p class="text-grey-900 body-s">Enter your pledge</p>
          <form class="flex gap-4" @submit.prevent="onPlanSubmit">
            <div
              class="flex items-center rounded-full border border-black-full/5 focus-within:border-cyan-300 transition-colors px-6 py-4 gap-2 max-w-[6.25rem] w-full"
            >
              <span class="body-xs text-black-full/25">$</span>
              <input
                class="focus:border-none border-none w-full focus:outline-none body-xs font-bold caret-cyan-300 text-black-full"
                min="0"
                type="number"
                v-model.number="pledgeAmount"
                :disabled="!isActive"
              />
            </div>
            <Button :disabled="!isActive || isInputDisabled">Continue</Button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import Button from "./form/Button.vue";
import type { ModelRef } from "vue";

///// props/emits /////
const props = defineProps<{
  pledge: string;
  pledgeKey: string;
  description: string;
  amount?: number;
  quantity?: number;
}>();

const emits = defineEmits<{
  (e: "submit"): void;
}>();

///// refs, provide or inject then variables /////
const key = inject<ModelRef<string | undefined>>("backKey");
const pledgeAmount = ref(0);

///// computed /////

const isActive = computed(() => {
  if (key && props.pledgeKey) {
    return key.value === props.pledgeKey;
  }

  return false;
});

const isDisabled = computed(() => {
  return props?.quantity === 0;
});

const isInputDisabled = computed(() => {
  return pledgeAmount.value <= 0;
});

///// methods /////
const onPlanClick = () => {
  if (key) {
    key.value = props.pledgeKey;
  }
};

const onPlanSubmit = () => {
  emits("submit");
};

///// watchers /////

///// lifecycle /////
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
