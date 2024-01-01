<script setup>
import { store } from "./store/store.js";
</script>

<template>
  <div class="flex h-screen">
    <div class="flex w-full flex-col items-center justify-center p-4">
      <div class="mb-4 flex space-x-3">
        <span class="text-2xl">Welcom to Tic-Tac-Toe by</span>
        <img src="/vue.svg" class="inline animate-spin" />
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
