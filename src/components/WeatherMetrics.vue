<script setup>
import { useWeatherStore } from '@/stores/store';
const weather = useWeatherStore();
</script>

<template>
  <section class="metrics">
    <div class="metrics__block">
      <div class="metrics__name">PRECIPITATION</div>
      <div class="metrics__value">{{ weather.precipitation }}</div>
    </div>
    <div class="metrics__block">
      <div class="metrics__name">HUMIDITY</div>
      <div class="metrics__value">{{ weather.humidity }}</div>
    </div>
    <div class="metrics__block">
      <div class="metrics__name">WIND</div>
      <div class="metrics__value">{{ weather.wind }}</div>
    </div>
  </section>
</template>

<style scoped>
.metrics {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.metrics__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.metrics__name {
  font-weight: 600;
  font-size: 28px;
}

.metrics__value {
  font-weight: 500;
  font-size: 28px;
}
</style>
