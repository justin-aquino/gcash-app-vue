<script setup>
import AvailableBalance from "./components/AvailableBalance.vue";
import ServiceButton from "./components/ServiceButton.vue";
</script>

<template>
  <div>
    <AvailableBalance />
    <div>
      <ServiceButton icon="💰">Send</ServiceButton>
      <ServiceButton icon="👓">Load</ServiceButton>
      <ServiceButton icon="✅">Transfer</ServiceButton>
      <ServiceButton icon="💲">Bills</ServiceButton>
    </div>
  </div>
</template>
