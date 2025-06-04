<script setup>
defineProps({
  date: String,
  temperature: String,
  icon: String,
});
</script>

<template>
  <section class="forecast">
    <!-- Вывести динамически картинку с погодой -->
    <img src="../assets/cloudy-icon.svg" />
    <div class="date">{{ date }}</div>
    <div class="temperature">{{ temperature }} C</div>
  </section>
</template>

<style scoped>
.forecast {
  width: 100%;
  height: 165px;

  background-color: var(--forecast-color);

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.date {
  font-weight: 500;
  font-size: 20px;
}

.temperature {
  font-weight: bold;
  font-size: 20px;
}
</style>
