<template>
  <div class="custom-page-header">
    <h1 class="custom-header-title">{{ pageTitle }}</h1>
    <p class="custom-header-subtitle">{{ pageSubtitle }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Header',
      pageSubtitle: 'Subtitle',
    };
  },
};
</script>

<style scoped>
.custom-page-header {
  text-align: center;
  margin: 20px 0;
}

.custom-header-title {
  font-size: 32px;
  margin-bottom: 10px;
  color: #000;
}

.custom-header-subtitle {
  font-size: 18px;
  color: #333;
}
</style>
