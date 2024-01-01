<script setup>
import { store } from "../store/store";
</script>

<template>
  <div class="flex flex-col space-y-6">
    <p class="font-semibold text-2xl uppercase">Select Your Playing Mode</p>
    <select
      class="px-4 py-4 border font-semibold text-sm border-[#41B883]"
      v-model="store.playingMode"
    >
      <option value="" selected>Choose An Option</option>
      <option value="single">Single Player</option>
      <option value="multi">Multi Player</option>
    </select>
    <button
      type="button"
      @click="store.FirstStage(store.playingMode)"
      variant="secondary"
      class="px-4 py-2 rounded-md font-semibold text-sm shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#41B883] hover:bg-[#5affb5]"
    >
      Select
    </button>
  </div>
</template>
