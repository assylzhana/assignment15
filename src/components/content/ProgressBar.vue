<template>
  <div class="custom-progress-bar-container">
    <div class="custom-progress-bar">
      <div :style="{ width: `${progress}%` }" class="custom-progress-bar-fill"></div>
    </div>
    <div class="custom-progress-info">
      {{ progress }}%
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true,
      validator: (value) => value >= 0 && value <= 100,
    },
  },
};
</script>

<style scoped>
.custom-progress-bar-container {
  max-width: 400px;
  margin: 20px auto;
}

.custom-progress-bar {
  width: 100%;
  height: 20px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
}

.custom-progress-bar-fill {
  height: 100%;
  background-color: #000;
  transition: width 0.3s ease-out;
}

.custom-progress-info {
  text-align: center;
  font-size: 16px;
  color: #000;
}
</style>
