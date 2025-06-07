<script setup>
import MainCard from '@/components/MainCard.vue';
import DetailsPanel from '@/components/DetailsPanel.vue';

import { useWeatherStore, useInputStore, useForecastStore } from '@/stores/store';
import { ref, onMounted, watch } from 'vue';
import debounce from 'debounce';

/* import getUserLocation from '@/services/userLocation'; */

import api from '@/api/axios';

const weather = useWeatherStore();
const forecast = useForecastStore();
const input = useInputStore();

let data = ref(null);
let loading = ref(true);
let error = ref(null);

const fetch = async () => {
  try {
    const city = input.get;
    const response = await api.post(
      '',
      {},
      {
        params: {
          q: city,
        },
      },
    );
    data.value = response.data;
    weather.set(data.value);
    forecast.setActive(0);
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }
};

watch(
  () => input.input,
  debounce(() => {
    fetch();
  }, 500),
  { immediate: true },
);

/* Старый запрос onMounted */
// onMounted(async () => {
//   /* Добавить запрос на локацию пользователя, чтобы при старте сразу выдать ему нужный город */
//   /* await getUserLocation(); */
//   await fetch();
// });
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <MainCard />
    <DetailsPanel />
  </div>
</template>

<style scoped></style>
