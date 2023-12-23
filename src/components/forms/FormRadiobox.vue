<template>
  <div class="styled-radio-container">
    <div class="styled-input-container">
      <label for="customRadios" class="styled-input-label">Choose an Option:</label>
      <label class="styled-radio-label">
        <input
          type="radio"
          name="customRadios"
          v-model="selectedOption"
          :value="1"
          @change="handleStyledRadioChange"
          :class="{ 'styled-error-input': errorInput }"
          class="custom-styled-radio"
        />
        Option A
      </label>
      <label class="styled-radio-label">
        <input
          type="radio"
          name="customRadios"
          v-model="selectedOption"
          :value="2"
          @change="handleStyledRadioChange"
          :class="{ 'styled-error-input': errorInput }"
          class="custom-styled-radio"
        />
        Option B
      </label>
      <label class="styled-radio-label">
        <input
          type="radio"
          name="customRadios"
          v-model="selectedOption"
          :value="3"
          @change="handleStyledRadioChange"
          :class="{ 'styled-error-input': errorInput }"
          class="custom-styled-radio"
        />
        Option C
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
      selectedOption: null,
      errorMessage: 'Please select an option.',
      errorVisible: false,
      errorInput: false,
    };
  },
  methods: {
    validateStyledRadiobox() {
      return this.selectedOption !== null;
    },
    handleStyledRadioChange() {
      this.errorVisible = this.errorInput = !this.validateStyledRadiobox();
    },
  },
};
</script>

<style scoped>
.styled-radio-container {
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

.styled-radio-label {
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
}

.custom-styled-radio {
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
