<template>
      <div v-for="(item, index) in items" :key="index">
        {{ item }}
      </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: ['1', '2', '3', '4'],
      };
    },
  };
  </script>
  