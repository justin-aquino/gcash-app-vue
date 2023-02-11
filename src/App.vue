<script setup>
import AvailableBalance from "./components/AvailableBalance.vue";
import ServiceButton from "./components/ServiceButton.vue";
</script>

<template>
  <div>
    <AvailableBalance />
    <div>
      <!-- <button type="button">Send</button> -->
      <ServiceButton button-name="Send" icon="💰" />
      <ServiceButton button-name="Load" icon="🔄" />
      <ServiceButton button-name="Transfer" icon="✅" />
      <ServiceButton button-name="Bills" icon="💲" />
      <!-- <button type="button">Load</button>
      <button type="button">Transfer</button>
      <button type="button">Bills</button> -->
    </div>
  </div>
</template>
