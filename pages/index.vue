<template>
  <main class="w-full min-h-screen bg-white-300 flex flex-col items-start">
    <header class="w-full min-h-[18.75rem] sm:min-h-[25rem] bg-center bg-cover hero-img bg-no-repeat">
      <div class="absolute top-0 left-0 inset-0 hero-img-grad " />
      <Nav />
    </header> 

    <div class="translate-y-[-56px] sm:translate-y-[-92px] flex flex-col px-6 sm:px-0 sm:mx-auto w-full max-w-[45.625rem] gap-6">
      <BackThisProjectSection @backed="onModelToggle" />
      <Stats />
      <About @select="onSelectReward" />
    </div>

    <BackThisProjectDialog v-model:open="isBackedModelOpen" v-model:rewardKey="rewardKey" @submit="onBackedModelSubmit" />
    <ThankYouDialog class="thank-you-dialog" v-model="isSuccessModelOpen" />
  </main>
</template>

<script lang="ts" setup>
import Nav from '~/components/Nav.vue';
import BackThisProjectSection from '~/components/BackThisProjectSection.vue'
import Stats from '~/components/Stats.vue'
import About from '~/components/About.vue'
import BackThisProjectDialog from '~/components/BackThisProjectDialog.vue';
import ThankYouDialog from '~/components/ThankYouDialog.vue';

///// props/emits /////
defineProps<{}>();

///// refs, provide or inject then variables /////
const isBackedModelOpen = ref(false);
const isSuccessModelOpen = ref(false);

const rewardKey = ref<string>()

///// computed /////

///// methods /////
const onModelToggle = () => {
  isBackedModelOpen.value = !isBackedModelOpen.value
}

const onBackedModelSubmit = () => {
  isBackedModelOpen.value = false;
  isSuccessModelOpen.value = true;
}

const onSelectReward = (key: string) => {
  rewardKey.value = key;
  isBackedModelOpen.value = true;
}

///// watchers /////

///// lifecycle /////
</script>

<style lang="scss" scoped>
.hero-img {
  position: relative;
  background-image: url(/hero.png);
  z-index: 0;
  
  .hero-img-grad {
    background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%); 
    opacity: .6;
    z-index: -1;
  }
}

:global(.thank-you-dialog) {
  --max-width: 33.75rem;
}
</style>
