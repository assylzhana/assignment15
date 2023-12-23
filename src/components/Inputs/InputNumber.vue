<template>
  <div class="custom-input-container">
    <div class="input-container">
      <label for="inputNumber" class="input-label">Number:</label>
      <div class="input-wrapper">
        <input
          :type="type"
          id="inputNumber"
          v-model="inputValue"
          @input="handleInput"
          :class="{ 'error-input': errorInput }"
          placeholder="Input Number"
          class="custom-input"
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
  props: {
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      inputValue: '',
      errorMessage: 'Enter a valid number.',
      errorVisible: false,
      errorInput: false
    };
  },
  methods: {
    validateNumber(number) {
      const numberRegex = /^\d+$/;
      return numberRegex.test(number);
    },
    validateInput() {
      return this.validateNumber(this.inputValue.trim());
    },
    handleInput() {
      this.errorVisible = this.errorInput = !this.validateInput();
    }
  }
};
</script>
