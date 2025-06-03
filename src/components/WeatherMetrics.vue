<script setup>
import { useWeatherStore } from '@/stores/store';
const weather = useWeatherStore();

const metrics = [
  { name: 'PRECIPITATION', value: `${weather.current.precipitation} mm` },
  { name: 'HUMIDITY', value: weather.current.humidity },
  { name: 'WIND', value: `${weather.current.wind} km/h` },
];

import Metric from './Metric.vue';
</script>

<template>
  <section class="metrics">
    <!-- Здесь нужно будет сделать вывод динамическим в зависимости от того, на какой день в WeatherForecast я нажимаю -->
    <Metric
      v-for="metric in metrics"
      :key="metric.name"
      :name="metric.name"
      :value="String(metric.value)"
    />
  </section>
</template>

<style scoped>
.metrics {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
