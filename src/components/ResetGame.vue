<script setup>
import { store } from "../store/store";
</script>

<template>
  <div class="flex space-y-4">
    <button
      variant="primary"
      @click="store.ResetGame"
      class="rounded-md bg-[#41B883] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#5affb5] disabled:cursor-not-allowed disabled:opacity-50"
    >
      Reset Game
    </button>
  </div>
</template>
