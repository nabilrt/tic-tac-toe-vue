<script setup>

import { store } from "./store/store.js";
</script>

<template>
  <div class="flex h-screen">
    <div class="flex flex-col justify-center items-center p-4 w-full">
      <div class="flex space-x-3 mb-4">
        <span class="text-2xl">Welcom to Tic-Tac-Toe by</span>
        <img src="/vue.svg" class="animate-spin inline" />
      </div>
      <template v-if="!store.firstStage">
        <PlayingMode />
      </template>
      <template v-if="store.firstStage && !store.secondStage">
        <AddNames />
      </template>

      <template v-if="store.firstStage && store.secondStage">
        <Board />

        <template v-if="store.winner"><Winner /> <ResetGame /></template>

        <div>
          <template v-if="store.draw"><Draw /> <ResetGame /></template>
        </div>
      </template>
    </div>
  </div>
</template>
