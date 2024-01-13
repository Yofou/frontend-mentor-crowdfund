<template>
  <Dialog v-model="isOpen" hideClose>
    <div class="flex flex-col items-center text-center">
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="45" cy="45" r="45" fill="#3CB3AB" />
        <path
          d="M28 44.8753L39.2633 56.1387L61.402 34"
          stroke="white"
          stroke-width="5"
        />
      </svg>
      <h2 class="mt-8 heading-lg text-black-full font-bold">
        Thank for your support!
      </h2>
      <p class="mt-4 text-grey-900 body-m leading-[1.875rem]">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <Button class="mt-8" @click="onClick">Got it!</Button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "~/components/form/Dialog.vue";
import Button from "~/components/form/Button.vue";
///// props/emits /////
defineProps<{}>();

const isOpen = defineModel<boolean>();

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////
const onClick = () => {
  isOpen.value = false;
}

///// watchers /////

///// lifecycle /////
</script>
