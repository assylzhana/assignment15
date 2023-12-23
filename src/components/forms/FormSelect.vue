<template>
  <div class="styled-select-container">
    <div class="styled-input-container">
      <label for="selectOption" class="styled-input-label">Choose an Option:</label>
      <div class="styled-input-wrapper">
        <select
          id="selectOption"
          v-model="selectedOption"
          @change="handleStyledSelectChange"
          :class="{ 'styled-error-input': errorInput }"
          class="custom-styled-select"
        >
          <option value="" disabled>Select an option</option>
          <option value="option1">Styled Option 1</option>
          <option value="option2">Styled Option 2</option>
          <option value="option3">Styled Option 3</option>
        </select>
      </div>
      <div class="styled-error" :class="{ 'styled-error-visible': errorVisible }">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: '',
      errorMessage: 'Please select an option.',
      errorVisible: false,
      errorInput: false
    };
  },
  methods: {
    validateStyledSelect() {
      return this.selectedOption !== '';
    },
    handleStyledSelectChange() {
      this.errorVisible = this.errorInput = !this.validateStyledSelect();
    }
  }
};
</script>

<style scoped>
.styled-select-container {
  max-width: 300px;
  margin: 20px auto;
}

.styled-input-container {
  position: relative;
}

.styled-input-label {
  display: block;
  margin-bottom: 5px;
  font-size: 18px;
}

.styled-input-wrapper {
  position: relative;
}

.custom-styled-select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease-out;
}

.styled-error {
  color: #e53935;
  font-weight: bold;
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

.styled-error-input {
  border-color: #e53935;
}
</style>
