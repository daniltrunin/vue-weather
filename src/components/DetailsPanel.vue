<script setup>
import WeatherMetrics from './WeatherMetrics.vue';
</script>

<template>
  <section class="details">
    <WeatherMetrics />
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

  padding: 48px 50px 48px 90px;

  position: relative;
  left: -40px;
  z-index: -1;
}
</style>
