<template>
  <section
    class="w-full bg-white-full rounded-[.5rem] px-6 pb-10 pt-[3.25rem] sm:p-12 sm:pt-14 flex-col border border-black-full/5 relative"
  >
    <div
      class="w-14 h-14 bg-black-full rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center"
    >
      <Mastercraft class="w-[1.625rem] h-[1.625rem]" />
    </div>

    <h2 class="text-center text-black-full heading-m sm:display font-bold">
      Mastercraft Bamboo Monitor Riser
    </h2>
    <p class="text-center text-grey-900 body-xs sm:body-m mt-[.94rem]">
      A beautiful & handcrafted monitor stand to reduce neck and eye strain.
    </p>

    <div class="flex w-full mt-10 justify-between">
      <Button class="!body-m !pt-[1.06rem] !pb-[1.19rem]" @click="onBacked">
        Back this project
      </Button>

      <button
        class="flex gap-4 items-center sm:pr-6 rounded-full bg-grey-1500/5 text-grey-900 body-m font-bold group"
        :class="{ 'bg-cyan-600/5 text-cyan-600': isBookmarked }"
        @click="onBookmarkToggle"
      >
        <span
          class="w-14 h-14 rounded-full text-grey-300 bg-grey-1500 group-hover:bg-grey-1000 transition-colors grid place-content-center"
          :class="{ '!bg-cyan-600 !text-white-full': isBookmarked }"
        >
          <Bookmark />
        </span>

        <span v-if="isBookmarked" class="hidden sm:inline">Bookmarked</span>
        <span v-else class="hidden sm:inline">Bookmark</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "~/components/form/Button.vue";
import Bookmark from "~/components/icons/Bookmark.vue";
import Mastercraft from "~/components/icons/Mastercraft.vue";
///// props/emits /////
defineProps<{}>();

const emits = defineEmits<{
  (e: "backed"): void;
}>();

///// refs, provide or inject then variables /////
const isBookmarked = ref(false);

///// computed /////

///// methods /////
const onBacked = () => {
  emits("backed");
};

const onBookmarkToggle = () => {
  isBookmarked.value = !isBookmarked.value;
};

///// watchers /////

///// lifecycle /////
</script>
