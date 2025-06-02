<script setup>
import { useWeatherStore } from '@/stores/store';
const weather = useWeatherStore();
</script>

<template>
  <section class="main">
    <div class="main__upper">
      <h1 class="day">{{ weather.day }}</h1>
      <h2 class="date">{{ weather.date }}</h2>
      <h2 class="city">{{ weather.city }}</h2>
    </div>
    <div class="main__footer">
      <h2 class="temperature">{{ weather.temperature }}</h2>
      <h2 class="condition">{{ weather.condition }}</h2>
    </div>
  </section>
</template>

<style scoped>
.main {
  width: 500px;
  height: 660px;

  border: none;
  border-radius: 30px;

  background-image: url('../assets/main-background.png');
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 48px 0 48px 32px;
}

.main__upper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.day {
  font-weight: 600;
  font-size: 36px;
}

.date {
  font-weight: 500;
  font-size: 22px;
}

.city {
  font-weight: 550;
  font-size: 22px;

  display: flex;
  gap: 8px;
}

.city::before {
  content: url('../assets/location-icon.svg');
}

.main__footer {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.temperature {
  font-weight: 600;
  font-size: 50px;
}

.condition {
  font-weight: 600;
  font-size: 30px;
}
</style>
