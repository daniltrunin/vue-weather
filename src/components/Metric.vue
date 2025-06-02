<script setup>
defineProps({
  name: String,
  value: String,
});
</script>

<template>
  <section class="metrics">
    <div class="wrapper">
      <div class="name">{{ name }}</div>
      <div class="value">{{ value }}</div>
    </div>
  </section>
</template>

<style scoped>
.metrics {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name {
  font-weight: 600;
  font-size: 28px;
}

.value {
  font-weight: 500;
  font-size: 28px;
}
</style>
