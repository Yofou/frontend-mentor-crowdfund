<template>
  <nav
    class="max-w-[1110px] w-full flex justify-between px-6 sm:mx-auto mt-[3.12rem]"
  >
    <Logo />

    <div
      class="hidden sm:flex gap-8 text-white-full text-[13px] font-commis font-medium"
    >
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/discover">Discover</NuxtLink>
      <NuxtLink to="/started">Get Started</NuxtLink>
    </div>

    <button class="block sm:hidden" @click="onClick">
      <Cross v-if="isOpen" />
      <Hamburger v-else />
    </button>
  </nav>

  <Teleport to="body">
    <div
      v-if="isOpen"
      class="absolute top-0 left-0 bg-grad w-full min-h-screen z-10"
      ref="navContainerRef"
    >
      <nav
        class="max-w-[1110px] w-full flex justify-between px-6 sm:mx-auto mt-[3.12rem] mobile-header"
      >
        <Logo />

        <button class="block sm:hidden text-white-full mobile-header-action" @click="onClick">
          <Cross v-if="isOpen" />
          <Hamburger v-else />
        </button>
      </nav>

      <div ref="navListRef" class="flex flex-col rounded-[.5rem] bg-white-full mt-[2.25rem] mx-6 heading-s font-medium">
        <NuxtLink class="px-6 py-6" to="/about">About</NuxtLink>
        <NuxtLink class="px-6 py-6 border-t border-grey-1500/10" to="/discover">Discover</NuxtLink>
        <NuxtLink class="px-6 py-6 border-t border-grey-1500/10" to="/started">Get Started</NuxtLink>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import Logo from "./icons/Logo.vue";
import Hamburger from "./icons/Hamburger.vue";
import Cross from "./icons/Cross.vue";
import { ref } from "vue";
import { onClickOutside, useMagicKeys, useMediaQuery } from "@vueuse/core";
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";

///// props/emits /////
defineProps<{}>();

///// refs, provide or inject then variables /////
const isOpen = ref(false);
const isLargeScreen = useMediaQuery('(min-width: 640px)');
const { escape } = useMagicKeys()
const navListRef = ref<HTMLElement>();
const navContainerRef = ref<HTMLElement>();
const focusTrap = useFocusTrap(navContainerRef)

///// computed /////

///// methods /////
const onClick = () => (isOpen.value = !isOpen.value);

///// watchers /////
watchEffect(() => {
  if (isLargeScreen.value && isOpen.value) {
    isOpen.value = false;
  }
})

watchEffect(() => {
  if (escape.value) {
    isOpen.value = false;
  }
})

watchEffect(async () => {
  if (isOpen.value) {
    await nextTick()
    focusTrap.activate();
  } else {
    focusTrap.deactivate();
  }
})

///// lifecycle /////
onClickOutside(navListRef, () => {
  if (isOpen.value) {
    isOpen.value = false;
  }
}, {
  ignore: ['.mobile-header', '.mobile-header-action']
})
</script>

<style scoped>
.bg-grad {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
}
</style>
