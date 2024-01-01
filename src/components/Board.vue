<script setup>
import { store } from "../store/store";
</script>

<template>
  <div class="flex w-1/4 items-center text-center">
    <div
      class="box-border h-24 basis-1/3 border border-solid border-[#41B883] p-8 text-xl hover:bg-stone-300"
      @click="store.handleClick(0, 0)"
    >
      {{ store.board[0][0] }}
    </div>
    <div
      class="box-border h-24 basis-1/3 border border-solid border-[#41B883] p-8 text-xl hover:bg-stone-300"
      @click="store.handleClick(0, 1)"
    >
      {{ store.board[0][1] }}
    </div>
    <div
      class="box-border h-24 basis-1/3 border border-solid border-[#41B883] p-8 text-xl hover:bg-stone-300"
      @click="store.handleClick(0, 2)"
    >
      {{ store.board[0][2] }}
    </div>
  </div>
  <div class="flex w-1/4 items-center text-center">
    <div
      class="box-border h-24 basis-1/3 border border-solid border-[#41B883] p-8 text-xl hover:bg-stone-300"
      @click="store.handleClick(1, 0)"
    >
      {{ store.board[1][0] }}
    </div>
    <div
      class="box-border h-24 basis-1/3 border border-solid border-[#41B883] p-8 text-xl hover:bg-stone-300"
      @click="store.handleClick(1, 1)"
    >
      {{ store.board[1][1] }}
    </div>
    <div
      class="box-border h-24 basis-1/3 border border-solid border-[#41B883] p-8 text-xl hover:bg-stone-300"
      @click="store.handleClick(1, 2)"
    >
      {{ store.board[1][2] }}
    </div>
  </div>
  <div class="flex w-1/4 items-center text-center">
    <div
      class="box-border h-24 basis-1/3 border border-solid border-[#41B883] p-8 text-xl hover:bg-stone-300"
      @click="store.handleClick(2, 0)"
    >
      {{ store.board[2][0] }}
    </div>
    <div
      class="box-border h-24 basis-1/3 border border-solid border-[#41B883] p-8 text-xl hover:bg-stone-300"
      @click="store.handleClick(2, 1)"
    >
      {{ store.board[2][1] }}
    </div>
    <div
      class="box-border h-24 basis-1/3 border border-solid border-[#41B883] p-8 text-xl hover:bg-stone-300"
      @click="store.handleClick(2, 2)"
    >
      {{ store.board[2][2] }}
    </div>
  </div>
</template>
