<template>
    <div class="breadcrumb">
      <span v-for="(item, index) in items" :key="index" :class="{ 'breadcrumb-item': true, 'active': index === items.length - 1 }">
        <router-link v-if="index !== items.length - 1" :to="item.to">{{ item.label }}</router-link>
        <span v-else>{{ item.label }}</span>
      </span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  