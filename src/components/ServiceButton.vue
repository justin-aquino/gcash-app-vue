<script setup>
import { defineProps } from "vue";

const props = defineProps({
  //defineProps => this is so you can pass props through other components
  buttonName: String, //object type explicitly accepted.
  icon: String,
}); //this is to get the properties
</script>

<template>
  <div>
    <span>{{ props.icon }}</span>
    <!-- <button><slot name="icon" /></button> -->
    <button type="button">{{ props.buttonName }}</button>
  </div>
</template>
