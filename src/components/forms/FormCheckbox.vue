<template>
  <div class="styled-checkbox-container">
    <div class="styled-input-container">
      <label class="styled-checkbox-label">
        <input
          type="checkbox"
          v-model="isChecked"
          @change="handleStyledCheckboxChange"
          :class="{ 'styled-error-input': errorInput }"
          class="custom-styled-checkbox"
        />
        I Agree
      </label>
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
      isChecked: false,
      errorMessage: 'Please agree to the terms and conditions.',
      errorVisible: false,
      errorInput: false,
    };
  },
  methods: {
    validateStyledCheckbox() {
      return this.isChecked;
    },
    handleStyledCheckboxChange() {
      this.errorVisible = this.errorInput = !this.validateStyledCheckbox();
    },
  },
};
</script>

<style scoped>
.styled-checkbox-container {
  max-width: 300px;
  margin: 20px auto;
}

.styled-input-container {
  position: relative;
}

.styled-checkbox-label {
  display: flex;
  align-items: center;
  font-size: 18px;
}

.custom-styled-checkbox {
  margin-right: 10px;
  cursor: pointer;
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
  color: #e53935;
}
</style>
