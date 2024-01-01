<script setup>
import { store } from "../store/store";

const handleNames = () => {
  const firstPlayerName = store.player1Name;
  const secondaryPlayerName = store.player2Name;

  store.SecondStage(firstPlayerName, secondaryPlayerName);
};
</script>

<template>
  <div class="flex flex-col space-y-3 p-4">
    <p class="text-xl font-semibold uppercase">Add Player Names</p>
    <input
      type="text"
      class="border border-solid border-[#41B883] p-4 font-semibold"
      placeholder="Enter Player 1 Name"
      v-model="store.player1Name"
    />
    <div v-if="store.playingMode === 'multi'">
      <input
        type="text"
        class="border border-solid border-[#41B883] p-4 font-semibold"
        placeholder="Enter Player 1 Name"
        v-model="store.player2Name"
      />
    </div>

    <button
      variant="secondary"
      :disabled="!store.player1Name"
      @click="handleNames"
      class="rounded-md bg-[#41B883] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#5affb5] disabled:cursor-not-allowed disabled:opacity-50"
    >
      Continue
    </button>
  </div>
</template>
