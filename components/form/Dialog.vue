<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed top-0 z-20 left-0 bottom-0 w-full bg-black-full/50 grid overflow-auto justify-items-center items-start pt-[7.56rem] sm:pt-[11.5rem] pb-[4rem] px-6"
      v-bind="$attrs"
    >
      <section
        class="max-w-[var(--max-width,45.625rem)] w-full p-8 bg-white-full rounded-[.5rem] border border-black-full/5 relative"
        ref="dialogContainer"
      >
        <slot />

        <button class="absolute right-8 top-8 text-black-full/40 hover:text-black-full/100 transition-colors " @click="onClose" v-if="!hideClose">
          <Cross />
        </button>
      </section>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import Cross from "~/components/icons/Cross.vue";
import { onClickOutside, useMagicKeys, useMounted } from '@vueuse/core';
import { ref } from 'vue'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

///// props/emits /////
defineProps<{
  hideClose?: boolean;
}>();

///// refs, provide or inject then variables /////
const isMounted = useMounted()
const dialogContainer = ref<HTMLDivElement>()
const isOpen = defineModel<boolean>();
const { escape } = useMagicKeys();
const focusTrap = useFocusTrap(dialogContainer)

///// computed /////

///// methods /////
const onClose = () => {
  isOpen.value = false;
};

///// watchers /////
watchEffect(() => {
  if (escape.value && isOpen.value) {
    isOpen.value = false;
  }
})

onClickOutside(dialogContainer, () => {
  isOpen.value = false;
})

watchEffect(async () => {
  if (isOpen.value) {
    await nextTick(); 
    focusTrap.activate();
  } else {
    focusTrap.deactivate();
  }
})

watchEffect(() => {
  if (isMounted.value === false) return;
  
  if (isOpen.value) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = '';
  }
})
///// lifecycle /////

onUnmounted(() => {
  document.body.style.overflow = '';
})
</script>
