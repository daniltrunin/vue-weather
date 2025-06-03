<script setup></script>

<template>
  <input type="text" placeholder="Enter the name of the location" />
</template>

<style scoped>
input {
  width: 100%;

  padding: 14px 14px;

  border: none;
  border-radius: 10px;

  font-weight: 550;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;

  color: white;
  background: linear-gradient(90deg, rgba(144, 217, 224, 1) 1%, rgba(84, 96, 230, 1) 100%);

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
