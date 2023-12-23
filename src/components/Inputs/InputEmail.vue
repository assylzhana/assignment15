<template>
  <div class="styled-email-input-container">
    <label for="styledInputEmail" class="styled-input-label">Your Email:</label>
    <div class="styled-input-wrapper">
      <input
        type="email"
        id="styledInputEmail"
        v-model="inputValue"
        @input="handleInput"
        :class="{ 'styled-error-input': errorInput }"
        placeholder="Enter your email address"
      />
      <div class="styled-error-message" :class="{ 'styled-error-visible': errorVisible }">
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
      errorMessage: 'Please provide a valid email address.',
      errorVisible: false,
      errorInput: false,
    };
  },
  methods: {
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    validateInput() {
      return this.validateEmail(this.inputValue.trim());
    },
    handleInput() {
      this.errorVisible = this.errorInput = !this.validateInput();
    },
  },
};
</script>

<style scoped>
.styled-email-input-container {
  max-width: 300px;
  margin: 20px auto;
}

.styled-input-label {
  display: block;
  margin-bottom: 5px;
  font-size: 18px;
}

.styled-input-wrapper {
  position: relative;
}

.styled-error-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #333;
  border-radius: 5px;
  transition: border-color 0.3s ease-out;
}

.styled-error-message {
  color: #e53935;
  font-size: 13px;
  position: absolute;
  top: 100%;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.styled-error-visible {
  opacity: 1;
}
</style>
