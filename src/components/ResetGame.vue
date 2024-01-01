<script setup>
import { store } from "../store/store";
</script>

<template>
  <div class="flex space-y-4">
    <button variant="primary" @click="store.ResetGame" class="px-4 py-2 rounded-md font-semibold text-sm shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#41B883] hover:bg-[#5affb5]">Reset Game</button>
  </div>
</template>
