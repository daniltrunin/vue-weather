<script setup>
const props = defineProps({
  date: String,
  temperature: String,
  icon: String,
  isActive: Boolean,
});
</script>

<template>
  <section :class="['forecast', { 'active-forecast': isActive }]">
    <!-- Вывести динамически картинку с погодой -->
    <img :src="icon" />
    <div class="date">{{ date }}</div>
    <div class="temperature">{{ temperature }} °C</div>
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

  cursor: pointer;

  transition: all 0.3s;
}

.active-forecast {
  background-color: white;
  color: black;
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
