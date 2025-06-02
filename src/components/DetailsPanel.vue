<script setup>
import LocationInput from './LocationInput.vue';
import WeatherForecast from './WeatherForecast.vue';
import WeatherMetrics from './WeatherMetrics.vue';
</script>
<!-- Вывести динамически данные с API -->
<template>
  <section class="details">
    <WeatherMetrics />
    <WeatherForecast />
    <LocationInput />
  </section>
</template>

<style scoped>
.details {
  width: 560px;
  height: 620px;

  border: none;
  border-radius: 30px;

  background-color: var(--background-color-details);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 48px 45px 48px 90px;

  position: relative;
  left: -40px;
  z-index: 0;
}
</style>
