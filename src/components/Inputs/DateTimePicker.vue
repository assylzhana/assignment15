<template>
  <div class="styled-datetime-picker">
    <div class="input-container">
      <label for="styledInputDateTime" class="input-label">Choose Date & Time:</label>
      <div class="input-wrapper">
        <input
          type="datetime-local"
          id="styledInputDateTime"
          v-model="inputValue"
          @input="handleInput"
          :class="{ 'error-input': errorInput }"
          class="styled-input"
        />
      </div>
      <div class="error" :class="{ 'error-visible': errorVisible }">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      errorMessage: 'Please select a valid date and time.',
      errorVisible: false,
      errorInput: false,
    };
  },
  methods: {
    validateDateTime(dateTime) {
      return dateTime !== '';
    },
    validateInput() {
      return this.validateDateTime(this.inputValue);
    },
    handleInput() {
      this.errorVisible = this.errorInput = !this.validateInput();
    },
  },
};
</script>

<style scoped>
.styled-datetime-picker {
  max-width: 300px;
  margin: 20px auto;
}

.input-container {
  position: relative;
}

.input-label {
  display: block;
  margin-bottom: 5px;
  font-size: 18px;
}

.input-wrapper {
  position: relative;
}

.styled-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #333;
  border-radius: 5px;
  transition: border-color 0.3s ease-out;
}

.error {
  color: #e53935; 
  font-weight: bold;
  font-size: 13px;
  position: absolute;
  top: 100%;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.error-visible {
  opacity: 1;
}

.error-input {
  border-color: #e53935;
}
</style>
