<script setup>
import AvailableBalance from "./components/AvailableBalance.vue";
import ServiceButton from "./components/ServiceButton.vue";
</script>

<template>
  <div>
    <AvailableBalance />
    <div>
      <!-- <button type="button">Send</button> -->
      <ServiceButton />
      <ServiceButton />
      <ServiceButton />
      <ServiceButton />
      <!-- <button type="button">Load</button>
      <button type="button">Transfer</button>
      <button type="button">Bills</button> -->
    </div>
  </div>
</template>
