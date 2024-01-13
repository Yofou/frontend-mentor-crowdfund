<template>
  <section
    class="w-full bg-white-full border border-black-full/5 rounded-[.5px] px-6 py-10 sm:px-12 sm:py-12"
  >
    <h2 class="heading-s sm:heading-m text-black-full font-bold">About this project</h2>
    <p class="body-xs sm:body-m text-grey-900 leading-[1.5rem] sm:leading-[1.875rem] mt-6 sm:mt-[2.2rem]">
      <span>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that
        elevates your screen to a more comfortable viewing height. Placing your
        monitor at eye level has the potential to improve your posture and make
        you more comfortable while at work, helping you stay focused on the task
        at hand.
      </span>

      
      <span class="mt-4 block">
        Featuring artisan craftsmanship, the simplicity of design creates
        extra desk space below your computer to allow notepads, pens, and USB
        sticks to be stored under the stand.
      </span >
    </p>

    <AboutReward
      class="mt-10"
      pledge="Bamboo Stand"
      :amount="25"
      :quantity="101"
      @reward="onReward('bamboo-stand')"
    >
      You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.
    </AboutReward>

    <AboutReward
      pledge="Black Edition Stand"
      :amount="75"
      :quantity="64"
      @reward="onReward('black-edition-stand')"
    >
      You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.
    </AboutReward>

    <AboutReward
      class="opacity-50"
      pledge="Mahogany Special Edition"
      :amount="200"
      :quantity="0"
      @reward="onReward('mahogany-special-edition')"
    >
      You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.  Shipping is included.
    </AboutReward>
  </section>
</template>

<script setup lang="ts">
import AboutReward from "./AboutReward.vue";

///// props/emits /////
defineProps<{}>();

const emits = defineEmits<{
  (e: 'select', value: string): void;
}>()

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////
const onReward = (key: string) => {
  emits('select', key)
}

///// watchers /////

///// lifecycle /////
</script>
