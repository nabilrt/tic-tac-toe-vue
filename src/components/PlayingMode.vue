<script setup>
import { store } from "../store/store";
</script>

<template>
  <div class="flex flex-col space-y-6">
    <p class="text-2xl font-semibold uppercase">Select Your Playing Mode</p>
    <select
      class="border border-[#41B883] px-4 py-4 text-sm font-semibold"
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
      class="rounded-md bg-[#41B883] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#5affb5] disabled:cursor-not-allowed disabled:opacity-50"
    >
      Select
    </button>
  </div>
</template>
