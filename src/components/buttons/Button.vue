<template>
  <div class="container">
    <button
      @click="handleButtonClick"
      :class="{ 'error-btn': showError }"
      class="custom-btn"
    >
      Click me
    </button>
    <div class="error-msg" :class="{ 'error-visible': showError }">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: 'Hi',
      showError: false,
    };
  },
  methods: {
    validateButtonClick() {
      return true;
    },
    handleButtonClick() {
      if (!this.validateButtonClick()) {
        this.showError = true;
      } else {
        alert('Button clicked!');
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 300px;
  margin: 20px auto;
}

.custom-btn {
  padding: 10px;
  font-size: 16px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
}



.error-msg {
  color: rgb(255, 47, 47);
  font-weight: bold;
  font-size: 13px;
  margin-top: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.error-visible {
  opacity: 1;
}

.error-btn {
  background-color: #ff2f2f;
}
</style>
