<template>
  <div class="custom-slider-container">
    <div class="custom-input-container">
      <label for="customSliderInput" class="custom-input-label">Slider: {{ sliderValue }}</label>
      <input
        type="range"
        id="customSliderInput"
        v-model="sliderValue"
        @input="handleSliderChange"
        :class="{ 'custom-error-input': errorInput }"
        class="custom-slider"
      />
      <div class="custom-error" :class="{ 'custom-error-visible': errorVisible }">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderValue: 50,
      errorMessage: 'Please adjust the custom slider.',
      errorVisible: false,
      errorInput: false,
    };
  },
  methods: {
    handleSliderChange() {
      this.errorVisible = this.errorInput = !this.validateSlider();
    },
    validateSlider() {
      return true;
    },
  },
};
</script>

<style scoped>
.custom-slider-container {
  max-width: 300px;
  margin: 20px auto;
}

.custom-input-container {
  position: relative;
}

.custom-input-label {
  display: block;
  margin-bottom: 5px;
  font-size: 18px;
}

.custom-slider {
  width: 100%;
  margin-top: 10px;
}

.custom-error {
  color: #e53935;
  font-weight: bold;
  font-size: 13px;
  margin-top: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.custom-error-visible {
  opacity: 1;
}

.custom-error-input {
  color: #e53935;
}
</style>
