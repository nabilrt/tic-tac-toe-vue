<script setup>
import { store } from "../store/store";
</script>

<template>
  <div class="mt-5 flex">
    Your Game winner is&nbsp;
    <span v-if="store.winner"> {{ store.winner }} </span>
    <span v-else></span>
  </div>
</template>
