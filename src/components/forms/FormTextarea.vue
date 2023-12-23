<template>
  <div class="styled-textarea-container">
    <div class="styled-input-container">
      <label for="styledTextArea" class="styled-input-label">Enter Some Text:</label>
      <div class="styled-input-wrapper">
        <textarea id="styledTextArea" v-model="styledTextareaValue" @input="handleStyledTextareaInput" :class="{ 'styled-error-input': styledErrorInput }"          class="custom-styled-textarea"></textarea>
      </div>
      <div class="styled-error" :class="{ 'styled-error-visible': styledErrorVisible }">
        {{ styledErrorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      styledTextareaValue: '',
      styledErrorMessage: 'Text area cannot be empty.',
      styledErrorVisible: false,
      styledErrorInput: false,
    };
  },
  methods: {
    validateStyledTextarea() {
      return this.styledTextareaValue.trim() !== '';
    },
    handleStyledTextareaInput() {
      this.styledErrorVisible = this.styledErrorInput = !this.validateStyledTextarea();
    },
  },
};
</script>

<style scoped>
.styled-textarea-container {
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

.custom-styled-textarea {
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
