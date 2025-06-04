<script setup>
import Forecast from './Forecast.vue';
import { useWeatherStore, useForecastStore } from '@/stores/store';

const weather = useWeatherStore();
const forecastStore = useForecastStore();

const activeForecast = forecastStore.get();
// activeForecast.activeForecast равняется '1'

const handleClick = (index) => {
  forecastStore.setActive(index);
};
</script>

<template>
  <section class="forecasts">
    <Forecast
      v-for="(item, index) in weather.forecast.forecastday"
      :key="index"
      :date="String(item.date)"
      :temperature="String(item.temperature)"
      :isActive="activeForecast.activeForecast == index"
      @click="() => handleClick(index)"
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
