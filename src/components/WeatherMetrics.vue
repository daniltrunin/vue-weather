<script setup>
import { useWeatherStore } from '@/stores/store';
const weather = useWeatherStore();

const metrics = [
  { name: 'PRECIPITATION', value: weather.current.precipitation },
  { name: 'HUMIDITY', value: weather.current.humidity },
  { name: 'WIND', value: weather.current.wind },
];

import Metric from './Metric.vue';
</script>

<template>
  <section class="metrics">
    <!-- Здесь нужно будет сделать вывод динамическим в завимиости от того, на какой день в WeatherForecast я нажимаю -->
    <Metric
      v-for="metric in metrics"
      :key="metric.name"
      :name="metric.name"
      :value="metric.value"
    />
  </section>
</template>

<style scoped></style>
