<template>
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="changeTab(index)"
        :class="{ 'tab-item': true, 'active': index === active}"
      >
        {{ tab.label }}
      </div>
  
      <div class="tab-content">
        <slot :tab="tabs[activeTab]"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 0,
        tabs: [
          { label: '1', content: '1' },
          { label: '2', content: '2' },
          { label: '3', content: '3' },
        ],
      };
    },
    methods: {
      changeTab(index) {
        this.active= index;
      },
    },
  };
  </script>
  