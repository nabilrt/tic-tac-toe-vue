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
    <p class="font-semibold text-xl uppercase">Add Player Names</p>
    <input
      type="text"
      class="p-4 font-semibold border border-[#41B883] border-solid"
      placeholder="Enter Player 1 Name"
      v-model="store.player1Name"
    />
    <div v-if="store.playingMode === 'multi'">
      <input
        type="text"
        class="p-4 font-semibold border border-[#41B883] border-solid"
        placeholder="Enter Player 1 Name"
        v-model="store.player2Name"
      />
    </div>

    <button variant="secondary" @click="handleNames" class="px-4 py-2 rounded-md font-semibold text-sm shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#41B883] hover:bg-[#5affb5]">Continue</button>
  </div>
</template>
