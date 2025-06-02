<script setup>
const day = 'Wednesay';
</script>

<template>
  <section class="forecast">
    <!-- Вывести динамически картинку с погодой -->
    <img src="../assets/cloudy-icon.svg" alt="" />
    <div class="day">{{ day.slice(0, 3) }}</div>
    <div class="temperature">22 C</div>
  </section>
</template>

<style scoped>
.forecast {
  width: 100px;
  height: 160px;

  background-color: var(--forecast-color);

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
}

.day {
  font-weight: 500;
  font-size: 20px;
}

.temperature {
  font-weight: bold;
  font-size: 20px;
}
</style>
