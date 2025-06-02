<script setup>
import { useWeatherStore } from '@/stores/store';
const weather = useWeatherStore();

import Forecast from './Forecast.vue';
</script>

<template>
  <section class="forecasts">
    <Forecast
      v-for="(item, index) in weather.forecast.forecastday"
      :key="index"
      :date="item.date"
      :temperature="item.temperature"
    />
  </section>
</template>

<style scoped>
.forecasts {
  display: flex;
  justify-content: center;
  gap: 1px;

  background-color: var(--background-forecast-color);

  border-radius: 10px;
}
</style>
