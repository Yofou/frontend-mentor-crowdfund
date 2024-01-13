<template>
  <Dialog v-model="isOpen">
    <h2 class="text-black-full heading-lg font-bold mt-1">Back this Project</h2>
    <p class="mt-4 body-m text-grey-900 leading-[1.875rem]">
      Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the
      world?
    </p>

    <BackThisProjectContext v-model="rewardKey" class="mt-8">
      <BackPlan
        pledge-key="no-reward"
        pledge="Pledge with no Reward"
        description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
        @submit="onSubmit"
      />
      <BackPlan
        pledge-key="bamboo-stand"
        pledge="Bamboo Stand"
        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
        :amount="25"
        :quantity="101"
        @submit="onSubmit"
      />
      <BackPlan
        pledge-key="black-edition-stand"
        pledge="Black Edition Stand"
        description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        :amount="75"
        :quantity="64"
        @submit="onSubmit"
      />

      <BackPlan
        pledge-key="mahogany-special-edition"
        pledge="Mahogany Special Edition"
        description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.  Shipping is included."
        :amount="200"
        :quantity="0"
        @submit="onSubmit"
      />
    </BackThisProjectContext>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "~/components/form/Dialog.vue";
import BackThisProjectContext from './BackThisProjectContext.vue'
import BackPlan from "./BackPlan.vue";

///// props/emits /////
defineProps();

const emits = defineEmits<{
  (e: 'submit'): void;
}>()

///// refs, provide or inject then variables /////
const isOpen = defineModel<boolean>('open');
const rewardKey = defineModel<string>('rewardKey')

///// computed /////

///// methods /////
const onSubmit = () => {
  emits('submit')
}

///// watchers /////
watchEffect(() => {
  if (isOpen.value == false) {
    rewardKey.value = undefined
  }
})

///// lifecycle /////
</script>
