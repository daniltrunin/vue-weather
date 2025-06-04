<script setup></script>

<template>
  <input type="text" placeholder="Enter the name of the location" />
</template>

<style scoped>
input {
  width: 100%;

  padding: 14px 14px;

  border: 1px solid var(--background-color);
  border-radius: 4px;

  font-weight: 550;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;

  color: white;
  background: transparent;

  text-align: center;
}

input::placeholder {
  color: rgb(255, 255, 255, 0.35);
  text-align: center;
}

input:focus {
  outline: none;
}
</style>
