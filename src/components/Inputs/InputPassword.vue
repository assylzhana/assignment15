<template>
  <div class="password-input-container">
    <div class="input-container">
      <label for="inputPassword" class="input-label">Password:</label>
      <input
        :type="showPassword ? 'text' : 'password'"
        name="inputPassword"
        id="inputPassword"
        v-model="inputValue"
        @input="handleInput"
        :class="{ 'error-input': errorInput }"
        placeholder="Enter Password"
        class="password-input"
      />
      <button @click="togglePasswordVisibility" class="password-toggle-button">
      </button>
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
      errorMessage: 'Password must be at least 8 characters.',
      errorVisible: false,
      errorInput: false,
      showPassword: false
    };
  },
  methods: {
    validatePassword(password) {
      return password.length >= 8;
    },
    validateInput() {
      return this.validatePassword(this.inputValue.trim());
    },
    handleInput() {
      this.errorVisible = this.errorInput = !this.validateInput();
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>
