<script setup>
import { useWeatherStore } from '@/stores/store';
const weather = useWeatherStore();
</script>

<!-- Вывести динамически данные с API -->

<template>
  <section class="main">
    <div class="upper">
      <h2 class="city">{{ weather.location.city }}</h2>
      <h2 class="date">{{ weather.current.date }}</h2>
    </div>
    <div class="footer">
      <!-- Вывести динамически картинку с погодой -->
      <img class="weather-icon" :src="weather.current.image" alt="" />
      <h2 class="temperature">{{ weather.current.temperature }} °C</h2>
      <h2 class="condition">{{ weather.current.condition }}</h2>
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

  z-index: 1;
}

.upper {
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

.footer {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.weather-icon {
  width: 82px;
  height: 82px;
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
