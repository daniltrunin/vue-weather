<script setup>
import MainCard from '@/components/MainCard.vue';
import DetailsPanel from '@/components/DetailsPanel.vue';

import { useWeatherStore } from '@/stores/store';
import { ref, onMounted } from 'vue';

/* import getUserLocation from '@/services/userLocation'; */

import api from '@/api/axios';

const weather = useWeatherStore();

let data = ref(null);
let loading = ref(true);
let error = ref(null);

const fetch = async () => {
  try {
    const response = await api.get('/endpoint');
    data.value = response.data;
    weather.set(data.value);
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  /* Добавить запрос на локацию пользователя, чтобы при старте сразу выдать ему нужный город */
  /* await getUserLocation(); */
  await fetch();
});
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <MainCard />
    <DetailsPanel />
  </div>
</template>

<style scoped></style>
