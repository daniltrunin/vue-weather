<script setup>
import { useWeatherStore } from '@/stores/store';
const weather = useWeatherStore();

import Forecast from './Forecast.vue';
</script>

<template>
  <section class="forecasts">
    <Forecast />
  </section>
</template>

<style scoped></style>
